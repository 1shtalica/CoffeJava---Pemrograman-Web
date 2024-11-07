$(document).ready(function () {
  $("#burger-menu").on("click", function () {
    $("#nav-menu ul").toggleClass("show");
  });

  $(".order-card").hover(
    function () {
      $(this).css({
        transform: "scale(1.02)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      });
    }
  );

  $(".filter-btn").click(function () {
    const status = $(this).data("status");
    $(".order-card").each(function () {
      const cardStatus = $(this).find(".order-status").hasClass(status);
      if (status === "all" || cardStatus) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
