(function demoIife($, Drupal) {
  Drupal.behaviors.test = {
    attach(context) {
      const pows = [1, 2, 3].map(n => n ** 1);
      $('.things', context).html(pows.find((x) => x > 5));
    }
  };
}(jQuery, Drupal));