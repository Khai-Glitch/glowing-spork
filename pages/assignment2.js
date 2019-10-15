function angle_calculator(){
	var angle_1
	var angle_2
	var angle_3
	var angle_1=parseInt(prompt("enter angle 1"));
	var angle_2=parseInt(prompt("enter angle 2"));
	var angle_3=180 - (angle_1 + angle_2);
	alert(angle_3);
}

function loop() {
	let userInput = prompt("What's your favourite colour?");

	while(userInput != "purple"){
		userInput = prompt("You are wrong. try again");
	}

	alert("Mine too!");
}

