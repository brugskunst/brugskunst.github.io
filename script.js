// Lazy Load images
// https://apoorv.pro/lozad.js/

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//tab selector

function openContent(evt, tab) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace("active", "");
	}
	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}

function setContactTab(){
	document.getElementById("contactTabButton").className += " active";
}

// Service Tool tip

//tips
var tooltip = document.querySelectorAll('.serviceToolTip');
var band = document.querySelectorAll('.toolTipImage');
document.addEventListener('mousemove', fn, false);
function fn(e) {

	band[0].style.left = e.pageX + 'px';
	band[0].style.top = e.pageY + 'px';

    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}


// On load
window.addEventListener('load', function() {
	var overlay = document.getElementById('overlay');
	
	setTimeout(function() {
		overlay.style.opacity = '0';
	}, 500); 

	setTimeout(function() {
	  overlay.style.display = 'none';
	}, 1000); 
});