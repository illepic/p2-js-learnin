'use strict';

(function demoIife($, Drupal) {
  Drupal.behaviors.test = {
    attach: function attach(context) {
      var pows = [1, 2, 3].map(function (n) {
        return Math.pow(n, 1);
      });
      $('.things', context).html(pows.find(function (x) {
        return x > 5;
      }));
    }
  };
})(jQuery, Drupal);
