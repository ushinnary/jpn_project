$(document).ready(function(){
  $("#sidebar-btn").click(function(){
    $("#sidebar").toggleClass("visible");
    $("#main").toggleClass("positioned");
    $("#main-lessons").toggleClass("positioned");
    $("#main-tests").toggleClass("positioned");
    $("#main-themes").toggleClass("positioned");
  });$(".themes img").mouseenter(function(){
  $(".themes h2").toggleClass("visual");
});$("#but2").click(function(){
$("#opora").addClass("blue");
$("#opora").removeClass("contrasted").removeClass("opora");
});$("#but3").click(function(){
$("#opora").addClass("contrasted");
$("#opora").removeClass("blue").removeClass("opora");
});$("#but1").click(function(){
$("#opora").removeClass("blue").removeClass("opora").removeClass("contrasted");
});$("#but4").click(function(){
  $("#opora").addClass("opora");
  $("#opora").removeClass("blue").removeClass("contrasted");
});$(".themes").mouseenter(function(){
  $(this).css("opacity","0.8");
});$(".themes").mouseleave(function(){
  $(this).css("opacity","1");
});$(".perehod1").click(function(){
  $("#main").addClass("pokazat");
  $("#main-themes").addClass("skrit");
  $("#main-tests").addClass("skrit");
  $("#main-lessons").addClass("skrit");
  $("#main").removeClass("skrit");
  $("#main-themes").removeClass("pokazat");
  $("#main-tests").removeClass("pokazat");
  $("#main-lessons").removeClass("pokazat");
});$(".perehod2").click(function(){
  $("#main").addClass("skrit");
  $("#main-themes").addClass("skrit");
  $("#main-tests").addClass("skrit");
  $("#main-lessons").addClass("pokazat");
  $("#main").removeClass("pokazat");
  $("#main-themes").removeClass("pokazat");
  $("#main-tests").removeClass("pokazat");
  $("#main-lessons").removeClass("skrit");
});$(".perehod3").click(function(){
  $("#main").addClass("skrit");
  $("#main-themes").addClass("skrit");
  $("#main-tests").addClass("pokazat");
  $("#main-lessons").addClass("skrit");
  $("#main").removeClass("pokazat");
  $("#main-themes").removeClass("pokazat");
  $("#main-tests").removeClass("skrit");
  $("#main-lessons").removeClass("pokazat");
});$(".perehod4").click(function(){
  $("#main").addClass("skrit");
  $("#main-themes").addClass("pokazat");
  $("#main-tests").addClass("skrit");
  $("#main-lessons").addClass("skrit");
  $("#main").removeClass("pokazat");
  $("#main-themes").removeClass("skrit");
  $("#main-tests").removeClass("pokazat");
  $("#main-lessons").removeClass("pokazat");
});$("#menu-opora").click(function(){
  $("#opora.opora ul").toggleClass("visible");
});$("#nv ul li a").click(function(){
  $("#nv ul").removeClass("visible");
});
});
$("#sidebar ul li a").click(function(){
$("#sidebar").removeClass("visible");
$("#main").removeClass("positioned");
$("#main-tests").removeClass("positioned");
$("#main-themes").removeClass("positioned");
$("#main-lessons").removeClass("positioned");
});
var h_a="&#12354;";
var h_i="&#12356;";
var h_u="&#12358;";
var h_e="&#12360;";
var h_o="&#12362;";
var h_ka="&#12363;";
var h_ki="&#12365;";
var h_ku="&#12367;";
var h_ke="&#12369;";
var h_ko="&#12371;";
var h_sa="&#12373;";
var h_si="&#12375;";
var h_su="&#12377;";
var h_se="&#12379;";
var h_so="&#12381;";
var h_ta="&#12383;";
var h_ti="&#12385;";
var h_tu="&#12388;";
var h_te="&#12390;";
var h_to="&#12392;";
var h_na="&#12394;";
var h_ni="&#12395;";
var h_nu="&#12396;";
var h_ne="&#12397;";
var h_no="&#12398;";
var h_ha="&#12399;";
var h_hi="&#12402;";
var h_hu="&#12405;";
var h_he="&#12408;";
var h_ho="&#12411;";
var h_ma="&#12414;";
var h_mi="&#12415;";
var h_mu="&#12416;";
var h_me="&#12417;";
var h_mo="&#12418;";
var h_ra="&#12425;";
var h_ri="&#12426;";
var h_ru="&#12427;";
var h_re="&#12428;";
var h_ro="&#12429;";
var h_ya="&#12420;";
var h_yu="&#12422;";
var h_yo="&#12424;";
var h_wa="&#12431;";
var h_wo="&#12434;";
function h_lvl_1(){
  var hirabase=[h_a,h_i,h_u,h_e,h_o];
  for(i=0;i<5;i++){
    var randomer_1=Math.round(Math.random()*(hirabase.length-1));
    document.getElementById("test-question").innerHTML=(hirabase[randomer_1]);
    hirabase.splice(randomer_1,1);
  }
}
