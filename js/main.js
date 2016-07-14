$(function() {
  alert('Click any element to log its unique selector string to the console');
  $('*').on({
    click: function(event) {
      event.stopPropagation();
      var uniqueSelector = $(event.target).uniqueSelector();
      console.log('uniqueSelector:', uniqueSelector);
      $(uniqueSelector).fadeOut('fast', function() {
        $(uniqueSelector).fadeIn('fast');
      });
    }
  });
});