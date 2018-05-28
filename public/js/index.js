function openTab(obj){
		// console.log(obj.getAttribute('class'));
		var tab = document.querySelector('.'+obj.id);
		document.querySelector('#fa-'+obj.id).classList.toggle('fa-angle-down');
		document.querySelector('#fa-'+obj.id).classList.toggle('fa-angle-up');
		if(tab.style.display === 'none' || tab.style.display ===''){
				tab.style.display = 'block';
		}
		else 
				tab.style.display = 'none';
}

function scrollFunction(){
	var scrollValue = document.documentElement.scrollTop;
	if(scrollValue>0){
		document.querySelector('.left-social-link').style.visibility = 'visible';
	}
	else if(scrollValue ==0){
		document.querySelector('.left-social-link').style.visibility = 'hidden';
	}

}

document.querySelector('.submitContactForm').addEventListener('click',submitContactForm);

function submitContactForm(){
	var name = document.querySelector('#name').value;
	var email = document.querySelector('#email').value;
	var subject = document.querySelector('#subject').value;
	var contact = document.querySelector('#mobile').value;
	var message = document.querySelector('#message').value;
	console.log(contact);
	var emailValidate = emailValidation(email);

	if(name === '' || email ==='' || subject ==='' || message ===''){
		document.querySelector('.messageError').innerHTML="Please fill all mendatory details";
		errorPopup();
	}
	else if(!emailValidate){
		document.querySelector('.messageError').innerHTML="Email is not valid";
		errorPopup();		
	}
	else if(contact.length !== 10){
		document.querySelector('.messageError').innerHTML="Contact number must be 10 digits only";
		errorPopup();
	}
	else{
			
	}
	
		return false;
	
	// console.log(name);
	return false;
}
function emailValidation(email){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function errorPopup(){
	document.querySelector('.submitContactForm').innerHTML="<i class='fa fa-spinner fa-spin'></i>"
	var msz = document.querySelector('.error');
	var pos = -25;
	var id = setInterval(frame,5);
	function frame(){
		if(pos === 5)
			clearInterval(id);
		else{
			pos = pos + 0.5;
			msz.style.bottom = pos + '%';
		}
	}
	setTimeout(function(){
		msz.style.bottom = '-25%';
		document.querySelector('.submitContactForm').innerHTML="Send It"
	},3500);
}
$(document).ready(function(){
		/*-----------Scrool bar---------------*/
		$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
			// Only prevent default if animation is actually gonna happen
			// event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
				return false;
				} else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
				};
			});
			}
		}
	});
	
});
