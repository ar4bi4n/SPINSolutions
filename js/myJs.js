// toggle classes for burger menu
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("toggleIt");
    document.getElementById("p1").classList.toggle("toggleIt");
    document.getElementById("p2").classList.toggle("toggleIt");
    document.getElementById("p3").classList.toggle("toggleIt");
    document.getElementById("toggleBurger").classList.toggle("toggleIt");
};
// to hide menu when click link
$(".links").click(function(){
    $("#p2").toggleClass("toggleIt");
    $("#p3").toggleClass("toggleIt");
	$("#toggleBurger").toggleClass("toggleIt");
	$("#p1").toggleClass("toggleIt");
	$("#sidebar").toggleClass("toggleIt");
})
// fixed nav with effect
$(document).scroll(function () {
    var topY = $(document).scrollTop() //to calculate the y axis
    if (topY > 25) {
        $("nav").css("background-color", "rgba(0,0,0,0.9)").css("top", "-3px").css("height", "100px");
    } else {
        $("nav").css("background-color", "transparent").css("top", "5px").css("height", "100px");

    };
});

// go to top arrow
$(".goTop").hide();
$(document).scroll(function () {
    var topY = $(document).scrollTop() //to calculate the y axis
    if (topY > 150) {
        $(".goTop").show();
    } else {
        $(".goTop").hide();
    }
});
$(".goTop").click(function () {
    $("html,body").animate({ scrollTop: "0px" }, 1500);
});


// scroll to request service section
var rqstFormHeight = $(".rqstform").height(); //to compare between the mobile and desktop screen size by making condition from any element

if(rqstFormHeight == 600){ //desktop
	$(".rqstserv").click(function(){
    $("html,body").animate({scrollTop:"1240px"},1500);
});
}else { //mobile
	$(".rqstserv").click(function(){
    $("html,body").animate({scrollTop:"1680px"},1500);
	
        });
    }


// move inputs on form
$(".formChange").click(function(){
	$(this).css("margin-top","0.5em")
});

// form vaildation
$(".sendbtn").click(function(){
	var inputs = $(".form-control").val();
	if (inputs == ""){
$(".warningmsg").html('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Please Fill The Fields!')}

});


//view more btn
$(".secondcateg").hide();
$(".viewbtn").click(function(){
    $(".secondcateg").fadeToggle(500);
    
    var btnText = $(".viewbtn").text();
	if ( btnText == "VIEW MORE"){
        $(".viewbtn").text("VIEW LESS")  
    }else{
        $(".viewbtn").text("VIEW MORE")    
    }
});

