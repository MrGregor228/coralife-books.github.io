function checkParams() {
	var name = $('#name').val();
	var email = $('#email').val();
	var text = $('#text').val();

	if(email.indexOf('@') != -1 && name.length != 0 && text.length != 0) {
		$('#submit').removeAttr('disabled');
	} else {
		$('#submit').attr('disabled', 'disabled');
	}
}
checkParams();

function hideshow() {
	document.getElementById("mG61Hd").style.cssText="animation:hierrr 1s 1 linear;display:none;";
	document.getElementById("shower").style.cssText="display:block;animation:showwww 1s 1 linear;";
}
$('#subm').click(function remover(){
	$('.privat').removeAttr('disabled');
});



function checkParamsNext() {
	var nameNext = $('#name_next').val();
	var emailNext = $('#email_next').val();
	var textNext = $('#text_next').val();

	if(emailNext.indexOf('@') != -1 && nameNext.length != 0 && textNext.length != 0) {
		$('#submit2').removeAttr('disabled');
	} else {
		$('#submit2').attr('disabled', 'disabled');
	}
}
checkParamsNext();

function hideshowNext() {
	document.getElementById("formHider2").style.cssText="animation:hierrr 1s 1 linear;display:none;";
	document.getElementById("shower2").style.cssText="display:block;animation:showwww 1s 1 linear;";
}


function checkParamsThird() {
	var nameNext = $('#name_third').val();
	var emailNext = $('#email_third').val();
	var textNext = $('#text_third').val();

	if(emailNext.indexOf('@') != -1 && nameNext.length != 0 && textNext.length != 0) {
		$('#submit3').removeAttr('disabled');
	} else {
		$('#submit3').attr('disabled', 'disabled');
	}
}
checkParamsThird();


function hideshowThird() {
	document.getElementById("formHider3").style.cssText="animation:hierrr 1s 1 linear;display:none;";
	document.getElementById("shower3").style.cssText="display:block;animation:showwww 1s 1 linear;";
}

function checkParamsMagnit() {
	var nameFourth = $('#name_fourth').val();
	var emailFourth = $('#email_fourth').val();
	var textFourth = $('#text_fourth').val();

	if(emailFourth.indexOf('@') != -1 && nameFourth.length != 0 && textFourth.length != 0) {
		$('#submit4').removeAttr('disabled');
	} else {
		$('#submit4').attr('disabled', 'disabled');
	}
}
checkParamsMagnit();

function hideshowMagnit() {
	document.getElementById("formHider4").style.cssText="animation:hierrr 1s 1 linear;display:none;";
	document.getElementById("shower4").style.cssText="display:block;animation:showwww 1s 1 linear;";
}



$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});