$(document).ready(function(){

	//start
	$('.myslide .photo').eq(1).css('border-right', '5px solid black'); //making black right border
	$('.myslide .photo').eq(1).css('opacity', '0');
	$(".rangeInput").hide();
	$(".myslide").hide();

	$('.myslide .photo').eq(1).animate({
		opacity: 1
	},5000);
	$(".myslide").show(1000);
	$(".rangeInput").show(3000);
	



	//mousemove
	$('.myslide').mousemove(function(event){
		
			//get(1) return DOM, eq(1) return Jquery element
			/* event.offsetX; mouse otnositelno roditela */
			$('.myslide .photo').eq(1).css('width', event.offsetX + 'px');
		
	});

	//mouseout
	$('.myslide').mouseout(function(event) {
		$('.myslide .photo').eq(1).css('width', '100%');
	});


	//range
	$('.rangeInput').on('input',function(){
		$('.myslide .photo').eq(1).css('opacity', this.value);
	});

});







//OLD with another IDs, classes, without jQuery
/*
document.getElementById("myslide").onmousemove = function(event){
	var x = event.offsetX; //otnositelno roditela
	var y = event.offsetY;

	document.getElementById('two').style.width = x + 'px';
	//console.log('x =' + x + 'y = ' + y);
}

document.getElementById("myslide").onmouseleave = function(event){
	document.getElementById('two').style.width = '100%';
}

*/