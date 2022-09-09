// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//<![CDATA[
var owa_baseUrl = 'http://your.domain.com/path/to/owa/';
var owa_cmds = owa_cmds || [];
owa_cmds.push(['setSiteId', 'your_site_id']);
owa_cmds.push(['trackPageView']);
owa_cmds.push(['trackClicks']);
owa_cmds.push(['trackDomStream']);

(function() {
	var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
	_owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
	var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
}());
//]]>