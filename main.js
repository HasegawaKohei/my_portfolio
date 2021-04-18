// メニューバー
$('#toggle').click(function() {
   $(this).toggleClass("active");
   $('#overlay').toggleClass("open");
   if ($("html div").not("#overlay").hasClass("blur")){
      $("html div").not("#overlay").not(".button_container").removeClass("blur")
   }else{
      $("html div").not("#overlay").not(".button_container").addClass("blur")
   }
});

// 特定の位置までスクロール
//自己紹介
$('.menu_introduction').click(function() {
  $("html,body").animate({scrollTop:$(".introduction_title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});
//スキル
$('.menu_skills').click(function() {
  $("html,body").animate({scrollTop:$(".skill_section").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});
//作品
$('.menu_works').click(function() {
  $("html,body").animate({scrollTop:$(".portfolio_section").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});
//コンタクト
$('.menu_contact').click(function() {
  $("html,body").animate({scrollTop:$(".contact_title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

// Animate.cssのfadeInUpエフェクトを適用
$(".fadein").waypoint(function(direction) {
  if (direction === "down") {
    $(this.element).addClass("fadeInUp");
    this.destroy();
  }
}, { offset: "100%" });
