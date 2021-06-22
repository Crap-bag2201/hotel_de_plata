$(document).ready(function(){

  $('#menu-bar').click(function(){
     $(this).toggleClass('fa-times');
     $('.narbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function(){
   
    $('#menu-bar').removeClass('fa-times');
    $('.narbar').removeClass('nav-toggle');

    // scroll spy

    $('section').each(function(){

          let top =  $(window).scrollTop();
          let offset = $(this).offset().top - 200;
          let height = $(this).height();
          let id = $(this).attr('id');

          if(top > offset && top < offset + height){
            $('.narbar ul li a').removeClass('active');
            $('.navbar').find(`[href=#${id}"]`).addClass('active');
          }

          

    })

  });

  $('.menu .list .btn').click(function(){
       $(this).addClass('active').siblings().removeClass('active');

       let src = $(this).attr('data-src');

       $('#menu-img').attr('src', src);
  }); 

});
