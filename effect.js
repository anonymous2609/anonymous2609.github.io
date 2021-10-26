$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b0,#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
			$('#b00').animate({top:240, left: vw-300},500);
			$('#b11').animate({top:280, left: vw-200},500);
			$('#b22').animate({top:300, left: vw-100},500);
			$('#b33').animate({top:320, left: vw+0},500);
			$('#b44').animate({top:340, left: vw+100},500);
			$('#b55').animate({top:340, left: vw+200},500);
			$('#b66').animate({top:320, left: vw+300},500);
			$('#b77').animate({top:300, left: vw+400},500);
			$('#b88').animate({top:280, left: vw+500},500);
			$('#b99').animate({top:240, left: vw+600},500);
			
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});
	function loopZero() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b0').animate({left:randleft,bottom:randtop},10000,function(){
			loopZero();
		});
	}
	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}
	function loopNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b9').animate({left:randleft,bottom:randtop},10000,function(){
			loopNine();
		});
	}
	

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:0},8000);
		$('#b1,#b3,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
		$('#b0,#b2,#b4,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		loopZero();
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		var audio = $('.song')[0];
        audio.pause();
		var audio = $('.song1')[0];
        audio.play();
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(2000).promise().done(function(){
			$('#light_candle').fadeIn('fast');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function(){
		
		 vw = $(window).width()/2.5;
		$('#b0,#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
		$('#b0').attr('id','b00');
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b9').attr('id','b99')
		$('#b00').animate({top:240, left: vw-300},3000);
		$('#b11').animate({top:280, left: vw-200},3000);
		$('#b22').animate({top:300, left: vw-100},3000);
		$('#b33').animate({top:320, left: vw+0},3000);
		$('#b44').animate({top:340, left: vw+100},3000);
		$('#b55').animate({top:340, left: vw+200},3000);
		$('#b66').animate({top:320, left: vw+300},3000);
		$('#b77').animate({top:300, left: vw+400},3000);
		$('#b88').animate({top:280, left: vw+500},3000);
		$('#b99').animate({top:240, left: vw+600},3000);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		var audio = $('.song1')[0];
        audio.pause();
		var audio = $('.song2')[0];
        audio.play();
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(3000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
					var audio = $('.song2')[0];
					audio.pause();
					var audio = $('.song3')[0];
					audio.play();
				});
			}
			else{
				msgLoop(i);
			}			
		});
		}
		msgLoop(0);
	});
});
