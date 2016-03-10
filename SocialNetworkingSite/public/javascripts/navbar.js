var addNavBar = function()
{
	document.getElementById("navMenu").innerHTML =
	'<nav class="navbar navbar-inverse" role="navigation" style="padding-left:130px;">' + 
		'<ul class="nav navbar-nav">' + 
			'<li><a href="/">Home</a></li>' + 
		    '<li><a href="/signin">Sign in</a></li>' + 
		    '<li><a href="/register">Register</a></li>' + 
	    '</ul>' + 
	'</nav>';
}

addNavBar();