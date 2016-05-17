// jquery animate for skill bar
jQuery(document).ready(function() {
  $('.progress-bar').each(function(){
    $(this).animate({
      width: '100%'
    }, 6000);
  });
});
