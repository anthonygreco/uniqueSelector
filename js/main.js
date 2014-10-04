$(function() {
  $('*').on({
    click: function(event) {
      event.stopPropagation();
      var uniqueSelector = $(event.target).uniqueSelector();
      $(uniqueSelector).fadeOut('fast', function() {
        $(uniqueSelector).fadeIn('fast');
      });
    }
  })
});