$(document).ready(function() {
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 162) {
      $('.sub-nav-fixed').addClass('navbar-fixed')
      $('.fade-zone').addClass('fadeBox')
    }
    if ($(window).scrollTop() < 162) {
      $('.sub-nav-fixed').removeClass('navbar-fixed')
      $('.fade-zone').removeClass('fadeBox')
    }
  })
})
