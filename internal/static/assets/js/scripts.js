(function ($) {
  "use strict";
  $(window).load(function () {
    var $container = $("#projects");
    $container.isotope({
      itemSelector: ".project-item",
      filter: "*",
      masonry: {
        columnWidth: 1,
      },
    });
    $("#filters a").on("click", function () {
      var $this = $(this);
      if ($this.hasClass("selected")) {
        return false;
      }
      var $optionSet = $this.parents();
      $optionSet.find(".selected").removeClass("selected");
      $this.addClass("selected");
      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
      });
      return false;
    });
  });
})(jQuery);
