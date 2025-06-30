$(document).ready(function(){
  console.log('hi')
  $('#work').click(function(){
      $('.examples').toggleClass('display')
      if($('.examples').hasClass('display')){
        $('html,body').animate({
            scrollTop: $('.examples').offset().top
          },
          'fast');
      }
  })

  $('.modal').click(function(){
      console.log($(this).attr('href'))
      var item = $(this).attr('href');
      $(item).toggleClass('visible')
  })

  $('.modal-close').click(function(){
      $('.modal-window').removeClass('visible')
  })

  $('.modal-window.visible').click(function(){
      $('.modal-window').removeClass('visible')
  })
})