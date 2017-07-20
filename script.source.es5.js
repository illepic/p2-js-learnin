(function demoIife($, Drupal) {
  Drupal.behaviors.tabs = {
    attach: function tabsAttach(context) {
      // hello world
      $('body', context).addClass('blerp');
    }
  };
}(jQuery, Drupal));
