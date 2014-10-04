'use strict';
jQuery.fn.extend({
  uniqueSelector: function(selector) {
    selector = (typeof selector === 'undefined')? '' : selector;
    if(this.is('html')) {
      return 'html' + selector;
    }
    var current = this.get(0).nodeName.toLowerCase();
    current += (this.index() > -1)? ':nth-child(' + (this.index() + 1) + ')' : '';
    return this.parent().uniqueSelector(' > ' + current + selector);
  }
});
