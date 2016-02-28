var sessionCookie = "ActiveUser";

//window.name -> you can attach anything but it will be available only during the page is opened

function login() {
	//var username = theForm.username.value;
	var username = document.getElementById("username").value;
	//var password = theForm.password.value;
	var password = document.getElementById("password").value;
	if(validateUser(username, password)) {
		writeCookie(sessionCookie, true, 1);
	}
	hideIfLoggedIn();
}

function validateUser(username, password) {
	// TODO:
	return true;
}

function checkLoggedIn() {
	var loggedIn = readCookie(sessionCookie);
	if (loggedIn == "true") {
		loggedIn = true;
	} else {
		loggedIn = false;
	}
	//alert(loggedIn);
	return loggedIn;
}

function logout() {
	writeCookie(sessionCookie, false, 1);
	hideIfLoggedIn();
}

function writeCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
            }else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}

function hideIfLoggedIn() {
	var loggedIn = checkLoggedIn();
	if(loggedIn===true) {
		document.getElementById("loginForm").style.display = "none";
		document.getElementById("logoutButton").style.display = "block";
	} else {
		document.getElementById("loginForm").style.display = "block";
		document.getElementById("logoutButton").style.display = "none";
	}
}

function getCompanyInfo(boxID) {
	$('.info-container').hide();
	$('#box-' + boxID).fadeIn();
	//console.log("Hi!");
	//TODO
}
function resetCompanyInfo() {
	$('.info-container').hide();
	$('#box-0').fadeIn();
	document.getElementsByClassName("infoBox").close();
}

