(function demoIife($, Drupal) {
  Drupal.behaviors.tabs = {
    attach(context) {
      // Declare functionality
      function clickThing(e) {
        const tabId = $(this).data('tab');
        const $parentBox = $(e.delegateTarget);

        $('.tab, .panel', $parentBox)
          .removeClass('current');

        $(`[data-panel=${tabId}], [data-tab=${tabId}]`, $parentBox)
          .addClass('current');
      }

      // Implement
      $('.tab-wrapper', context).on('click', '.tab', clickThing);
    },
  };
}(jQuery, Drupal));
