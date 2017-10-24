(function demoIife($, Drupal) {
  Drupal.behaviors.tabs = {
    attach(context) {
      $('.tab-wrapper', context).on('click', '.tab', function clickThing(e) {
        e.preventDefault();

        const tabId = $(this).data('tab');
        const $parentBox = $(e.delegateTarget);

        $('[data-tab], [data-pane]', $parentBox)
          .removeClass('active');

        $(`[data-tab=${tabId}], [data-pane=${tabId}]`, $parentBox)
          .addClass('active');
      });

      // Hit all first
      $('.nav-item:first-child>.tab', context).trigger('click');
    },
  };
}(jQuery, Drupal));
