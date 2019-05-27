$(function () {
  /* menu button  */
  var btn = $(".menu_btn");
  var btn_active = $(".menu_btn_active");
  btn.click(function () {
    btn.toggleClass("menu_btn_active");
  });
  btn_active.click(function () {
    btn.removeClass("menu_btn_active");
  });
  btn.click(function () {
    $(".menu_ul").toggleClass("active");
  });
  /* menu button end */


  /* slider about us */
  var images = document.querySelectorAll(".gallery img");
  var indicator = document.querySelectorAll(".indicators .dot");

  for (let i = 0; i < indicator.length; i++) {
    indicator[i].onclick = function (e) {
      e.preventDefault();
      var order = this.dataset.order;

      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
        indicator[i].classList.remove("active");
      }

      images[order].classList.add("active");
      indicator[order].classList.add("active");
    };
  }
  /* slider about us end  */


  /* Переключатель сервес */
  var active_main = $(".uslugi .active_main");
  var remove_main = $(".uslugi .remove_main");

  active_main.click(function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .next()
      .addClass("active");
  });
  remove_main.click(function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .removeClass("active");
  });
  /* Переключатель сервес end */


  /* Переключатель team */
  team = $(".team_main img");
  info = $(".team_info");

  team.click(function (e) {
    e.preventDefault();
    $(this)
      .next()
      .toggleClass("active");
  });
  /* Переключатель team end */

  /* slider say */
  $('.item').click(function () {
    $('.item').removeClass('active')
    $('.mySlides').removeClass('active')
    $('.comments').removeClass('active')
    $('.item').removeClass('active').eq($(this).index()).addClass('active');
    $('.mySlides').removeClass('active').eq($(this).index()).addClass('active');
    $('.comments').removeClass('active').eq($(this).index()).addClass('active');

  })
  var prev = $('.left');
  var next = $('.right');
  var dots = $('.item');
  var Slids = $('.mySlides');
  var text = $('.comments');
  var i = 0;
  prev.click(function () {
    $('.item').removeClass('active')
    $('.mySlides').removeClass('active')
    $('.comments').removeClass('active')
    dots.eq(i).removeClass('active');
    Slids.eq(i).removeClass('active');
    text.eq(i).removeClass('active');
    i--;
    if (i < 0) {
      i = $('.item').length - 1
    }
    dots.eq(i).addClass('active');
    Slids.eq(i).addClass('active');
    text.eq(i).addClass('active');
  })
  next.click(function () {
    $('.item').removeClass('active')
    $('.mySlides').removeClass('active')
    $('.comments').removeClass('active')
    dots.eq(i).removeClass('active');
    Slids.eq(i).removeClass('active');
    text.eq(i).removeClass('active');
    i++;
    if (i > $('.item').length - 1)(i = 0)
    dots.eq(i).addClass('active');
    Slids.eq(i).addClass('active');
    text.eq(i).addClass('active');
  })
  /* slider say end */

  /* menu anchor */
  var link = $(".menu ul a");
  
  link.on('click', function(e){
    e.preventDefault();
    link.removeClass('active');
    var selector = $(this).addClass('active').attr('href');
    var target = $(selector);
    $('html, body').animate({
        scrollTop: target.offset().top - 100
    }, 500);   
  })
  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $(".menu_navbar .top").fadeIn();
    }else{
      $(".menu_navbar .top").fadeOut();
    }
  })
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    link.each(function(){
      var selector = $(this).attr('href');
      var target = $(selector);
      if(scroll >= target.offset().top - 200){
        link.removeClass('active');
        $(this).addClass('active');
      }
    })
  })
  $(".menu_navbar .top").click(function(){
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
  /* menu anchor end */
});


