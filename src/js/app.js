$(function() {

  // Close window 
  $(document).mouseup(function(e) {
    let div = $('.modal__dialog');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      div.parent().fadeOut();
    }
  });

  // Close dialog window
  $('.modal__close').click(function(e) {
    e.preventDefault();
    $(this).parents('.modal').fadeOut();
  });

  // Open modal dialog width data attr
  $('[data-action]').click(function(e) {
    e.preventDefault();
    let modal = $(this).attr('data-action');
    $('[data-modal=' + modal + ']').fadeIn();
  });

  // range slider
  $(document).ready(function(e) {
    $('.js--range-slider').each(function() {
      $(this).css('background','linear-gradient(to right, #2cae82 0%, #2cae82 '+this.value +'%, #fff ' + this.value + '%, white 100%)');
    });
  });
  $(document).on('input change', '.js--range-slider', function(e) {
    $(this).css('background','linear-gradient(to right, #2cae82 0%, #2cae82 '+this.value +'%, #fff ' + this.value + '%, white 100%)');
  });
});



// old js 
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
  
