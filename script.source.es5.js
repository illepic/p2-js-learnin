(function iife($, Drupal) {
  Drupal.behaviors.tabs = {
    attach: function(context) {

      $(".tab-wrapper", context).on("click", ".tab", function(e) {
        e.preventDefault();

        var tabId = $(this).data("tab");
        var $parentBox = $(e.delegateTarget);

        $("[data-tab], [data-pane]", $parentBox)
          .removeClass("active");

        $("[data-tab=" + tabId + "], [data-pane=" + tabId +"]", $parentBox)
          .addClass("active");
      });

      // Hit all first
      $(".nav-item:first-child>.tab", context).trigger("click");
    }
  };
})(jQuery, Drupal);
