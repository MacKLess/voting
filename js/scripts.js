$(document).ready(function(){
  var ageDetail=function(){
  $("select").change(function(){
    var age = this.value;
    if (age === "Over 18" || age === "I am 18") {
      $('.notification').hide();
    }
    else {
      $('.notification span label').text('Oops! You are too young to vote.');
      $("select").hide();
      $(".links").removeClass("hide");
    }




  })
  }
  $('li span').hover(function() {
    $('li span').removeClass('menuLink');
    $(this).addClass('menuLink');
  })
  ageDetail();

});
