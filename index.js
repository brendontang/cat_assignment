var imgchar = document.getElementById("cat_img");
var num = 0;
var num2 = 0;
var height = 100;
var num3 = 0;

document.getElementById("avatar1").addEventListener("click", function(){
	imgchar.src= "ava1.png";
	
});

document.getElementById("avatar2").addEventListener("click", function(){
	imgchar.src= "ava2.png";
	
});

//make menu imgs visible(right -75px off screen) to 0px (on the screen)
document.getElementById("menu_button").addEventListener("click", function(){
	document.getElementById("menu").style.right = "0px";
	
	
});
//move image up
document.getElementById("up_button").addEventListener("click", function(){
	num2 = num2 + 7;
	document.getElementById("center").style.bottom = num2 +"0px";
	
});
//move image down
document.getElementById("down_button").addEventListener("click", function(){
	num2 = num2 - 7;
	document.getElementById("center").style.bottom = num2 + "0px";
	
});

	
document.getElementById("left_button").addEventListener("click", function(){
	num2 = num2 - 7; 
	document.getElementById("center").style.left = num2 + "0px";
	
});

document.getElementById("right_button").addEventListener("click", function(){
	num2 = num2 + 7;
	document.getElementById("center").style.left = num2 + "0px";
	
});


document.getElementById("plus_button").addEventListener("click", function(){
	height = height + 1;
	imgchar.style.height = height+"%";
	
});


document.getElementById("minus_button").addEventListener("click", function(){
	height = height - 1;
	imgchar.style.height = height+"%";
	
});

	document.getElementById("hat").addEventListener("click", function(){
	document.getElementById("cowboyhat").style.display ="block";
			
});

	document.getElementById("shirt").addEventListener("click", function(){
	document.getElementById("shirt_img").style.display ="block";

});

	document.getElementById("ring").addEventListener("click", function(){
	document.getElementById("bow_img").style.display ="block";

});

	document.getElementById("cat_img").addEventListener("click", function(){
	document.getElementById("left_button").style.display ="none";
	document.getElementById("right_button").style.display ="none";
	document.getElementById("up_button").style.display ="none";
	document.getElementById("down_button").style.display ="none";
	document.getElementById("plus_button").style.display ="none";
	document.getElementById("minus_button").style.display ="none";
	document.getElementById("avatar1").style.display ="none";
	document.getElementById("avatar2").style.display ="none";
	
});

	document.getElementById("header").addEventListener("click", function(){
	document.getElementById("left_button").style.display ="inline";
	document.getElementById("right_button").style.display ="inline";
	document.getElementById("up_button").style.display ="inline";
	document.getElementById("down_button").style.display ="inline";
	document.getElementById("plus_button").style.display ="inline";
	document.getElementById("minus_button").style.display ="inline";
	document.getElementById("avatar1").style.display ="inline";
	document.getElementById("avatar2").style.display ="inline";
	
});

document.getElementById("up_menu").addEventListener("click", function(){
	num3 = num3 + 7;
	document.getElementById("shirt_img").style.bottom = num3 +"0px";
	
});

document.getElementById("down_menu").addEventListener("click", function(){
	num3 = num3 - 7;
	document.getElementById("shirt_img").style.bottom = num3 +"0px";
	
});

document.getElementById("right_menu").addEventListener("click", function(){
	num3 = num3 + 7;
	document.getElementById("shirt_img").style.left = num3 +"0px";
});

document.getElementById("left_menu").addEventListener("click", function(){
	num3 = num3 - 7;
	document.getElementById("shirt_img").style.left = num3 +"0px";
});

document.getElementById("up_menu").addEventListener("click", function(){
	num3 = num3 + 7;
	document.getElementById("cowboyhat").style.bottom = num3 +"0px";
	
});

document.getElementById("down_menu").addEventListener("click", function(){
	num3 = num3 - 7;
	document.getElementById("cowboyhat").style.bottom = num3 +"0px";
	
});

document.getElementById("right_menu").addEventListener("click", function(){
	num3 = num3 + 7;
	document.getElementById("cowboyhat").style.left = num3 +"0px";
});

document.getElementById("left_menu").addEventListener("click", function(){
	num3 = num3 - 7;
	document.getElementById("cowboyhat").style.left = num3 +"0px";
});


document.getElementById("up_menu").addEventListener("click", function(){
	num3 = num3 + 7;
	document.getElementById("bow_img").style.bottom = num3 +"0px";
	
});

document.getElementById("down_menu").addEventListener("click", function(){
	num3 = num3 - 7;
	document.getElementById("bow_img").style.bottom = num3 +"0px";
	
});

document.getElementById("right_menu").addEventListener("click", function(){
	num3 = num3 + 7;
	document.getElementById("bow_img").style.left = num3 +"0px";
})

document.getElementById("left_menu").addEventListener("click", function(){
	num3 = num3 - 7;
	document.getElementById("bow_img").style.left = num3 +"0px";
});





