jQuery(function($) {
  $(document).mouseup(function(e) {
    var div = $('.popup .window');
    if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
      div.parent().fadeOut();
    }
  });
});

$(function() {
  $('.project-content .text .flex .item').click(function() {
    $('.popup.user').fadeIn();
  });
  $('.cabinet-page .docs nav a.form4').click(function() {
    $('.popup.form4').fadeIn();
  });
  $('.cabinet-page .pro .list .item a.form3').click(function() {
    $('.popup.form3').fadeIn();
  });
  $('.cabinet-page .docs nav a.form2').click(function() {
    $('.popup.form2').fadeIn();
  });
  $('.cabinet-page .pro .list .item a.form1').click(function() {
    $('.popup.form1').fadeIn();
  });
  $('.popup .window .close').click(function() {
    $(this).parent().parent().fadeOut();
  });
  $('.docs-page .content table tbody tr td button').click(function() {
    $('.popup.photos').fadeIn();
  });
  $('.mobile-menu .close').click(function() {
    $('.mobile-menu').fadeOut();
  });
  $('.header .menu-button').click(function() {
    $('.mobile-menu').fadeIn();
  });
  $('.docs-page .content table tbody tr td button').on('click', function() {
    $('.popup .window .list').slick('setPosition');
  });
  $('.popup .window .list').slick({
    dots: true
  });
  var slickk=$('.popup .window .list');
  $('.popup .window .head .number').html( slickk.slick('getSlick').slideCount);
});
