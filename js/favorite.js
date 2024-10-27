// favorite.js
$(document).ready(function() {
    // Display favorites when page loads
    displayFavorites();
    
    // Handle remove button click
    $(document).on('click', '.remove-favorite', function() {
        const productTitle = $(this).data('title');
        removeFromFavorites(productTitle);
        $(this).closest('.card').fadeOut(300, function() {
            $(this).remove();
            checkEmptyFavorites();
        });
    });
});

// Function to display favorites
function displayFavorites() {
    const favorites = getFavorites();
    const productsContainer = $('.wishList .products');
    
    // Clear existing content
    productsContainer.empty();
    
    if (favorites.length > 0) {
        // Display each favorite product
        favorites.forEach(function(product) {
            const productCard = `
                <div class="card">
                    <img src="${product.img}" alt="${product.title}">
                    <div class="detail-product">
                        <h3>${product.title}</h3>
                        <p>${product.price}</p>
                        <button class="remove-favorite" data-title="${product.title}">
                            Remove from Favorites
                        </button>
                    </div>
                </div>
            `;
            productsContainer.append(productCard);
        });
    } else {
        // Show empty message
        showEmptyMessage();
    }
}

// Function to remove product from favorites
function removeFromFavorites(productTitle) {
    let favorites = getFavorites();
    favorites = favorites.filter(item => item.title !== productTitle);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to get favorites from localStorage
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Function to check if favorites is empty and show message
function checkEmptyFavorites() {
    const favorites = getFavorites();
    if (favorites.length === 0) {
        showEmptyMessage();
    }
}

// Function to show empty favorites message
function showEmptyMessage() {
    $('.wishList .products').html(`
        <div class="empty-favorites">

            <p>No favorite products yet</p>
        </div>
    `);
}