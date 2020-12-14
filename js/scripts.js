function spread1() {
	$("#innermenu1").slideToggle();
}
function spread2() {
	$("#innermenu2").slideToggle();
}
function spread3() {
	$("#innermenu3").slideToggle();
}
function spread4() {
	$("#innermenu4").slideToggle();
}
function spread5() {
	$("#innermenu5").slideToggle();
}
function reservation() {

	var reservation = JSON.parse('{"number":"" , "arrivaltime": "", "deposit": "", "payment": "" , "cardNumber": "", "expire":"", "security": ""}');
	reservation["number"] = $("#nb").val();
	reservation["arrivaltime"] = $("#at").val();
	reservation["payment"] = $("#pt").val();
	reservation["cardNumber"] = $("#cc").val();
	reservation["expire"] = $("#ed").val();
	reservation["security"] = $("#sc").val();
	reservation["deposit"] = $("#ds").val();
	if ($("#nb").val()=="") {
		alert("Please input the number of people");
	}
	if ($("#at").val()=="") {
		alert("Please input the Arrival time");
	}
	if ($("#pt").val()=="") {
		alert("Please input the Payment type");
	}
	if ($("#cc").val()=="") {
		alert("Please input the Credit card number");
	}
	if ($("#ed").val()=="") {
		alert("Please input the Expire date");
	}
	if ($("#sc").val()=="") {
		alert("Please input the security date");
	}
	if ($("#ds").val()=="") {
		alert("Please input the Deposit");
	}
	else{
		alert("The number of people: " + reservation.number+ "\nArrival time: " + reservation.arrivaltime + "\nDeposit: " + reservation.deposit + "\nPayment type: " + reservation.payment + "\nCredit card number: " + reservation.cardNumber + "\nExpire date: " + reservation.expire + "\nSecurity code: " + reservation.security);
	}
}
var i = 0;
var contact = JSON.parse('{"name":"","email":"","phoneNumber":"","message":""}');

function contactfunc() {
	if (document.getElementById("answer").validity.valid && document.getElementById("answer").value != "") {
		i=i+1;
	}
	else {
		alert("Wrong fomat or Empty input！")
	}
	if (i==1) {
		document.getElementById("answer").type = "email";
		document.getElementById("contactp").innerHTML = "Would you like to tell us your email address?";
		document.getElementById("conbtn").style.backgroundColor = "green";
		contact["name"] = $("#answer").val();
		document.getElementById("answer").value = "";
		
	}
	if (i==2) {
		document.getElementById("answer").type = "text";
		document.getElementById("contactp").innerHTML = "Would you like to tell us your phone number?";
		document.getElementById("conbtn").style.backgroundColor = "pink";
		contact["email"] = $("#answer").val();
		document.getElementById("answer").value = "";

	}
	if (i==3) {
		document.getElementById("answer").type = "text";
		document.getElementById("contactp").innerHTML = "Do you have some special needs? Please leave the message.";
		document.getElementById("conbtn").style.backgroundColor = "orange";
		document.getElementById("conbtn").innerHTML = "Submit";
		document.getElementById("conbtn").style.width = "100px";
		contact["phoneNumber"] = $("#answer").val();
		document.getElementById("answer").value = "";
	}
	if (i==4) {
		contact["message"] = $("#answer").val();
		alert("Your name is "+contact.name+ "\nYour email address is "+ contact.email + "\nYour phone number is " + contact.phoneNumber + "\nYour message is " + contact.message);
		i=0;
		document.getElementById("conbtn").innerHTML = "Next";
		document.getElementById("conbtn").style.backgroundColor = "red";
		document.getElementById("answer").value = "";
	}
}

