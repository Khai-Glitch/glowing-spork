function angle_calculator(){
	var angle_1
	var angle_2
	var angle_3
	var angle_1=parseInt(prompt("enter angle 1"));
	// if (angle_1 == NaN) {
	// 		alert("That's not a number!");
	// 	}
	var angle_2=parseInt(prompt("enter angle 2"));
	// if (angle_2 == NaN) {
	// 		alert("That's not a number!");
	// 	}
	var angle_3=180 - (angle_1 + angle_2);
	alert(angle_3);
}

function centuryFromYear(){
	var year=(prompt("enter year"))
    	year = year - 100;
    	year = year + 1 / 1000;
  		alert(year);
	}

function tenFour(){
  	// var modOfTen = (i%1 0=== 0);
  	// var modOfFour = (i%4 === 0); 
  	for (var i = 0; i < 101; i++) {
  		if (i%10 === 0 && i%4 === 0) {
	 		console.log("TenFour");
		}
  		else if (i%4 === 0){ 
			console.log("Four");
		} 
	 	else if (i%10 === 0){ 
			console.log("Ten");
		}
		if (i%10 === 0 && i%4 === 0) {
	 		console.log("TenFour");
		}
		else{
			console.log (i)
 		}
 	}
}
//reference for above code:https://www.w3schools.com/java/java_conditions.asp
//&//
//http://stackprinter.appspot.com/questions/what-is-your-solution-to-the-fizzbuzz-problem.html//
// function login(){
//   let userName = prompt("Username:");
//   let password = prompt("Password:");

// 	 if(userName == "khai"&& password =="Khaira"){
// 	    alert("sleep")
// 		}
// 	else{
// 	  alert("Invalid");
// 	  }
// }

// function everyOtherLetter (input) {
//   let message = prompt("enter your meme here");
//   for (i=0; i < string.length; i++; str.charAt(i))
//   } 
// return 
// console.log(message(test))

// function howManyDalmations(){
// var = ["Hardly any", "More than a handful!", "Woah that is a lot of dogs!", "101 DALMATIANS!!!"];
//   if (number < 10) return "Hardly any"
//   if (number > 50) return "More than a handful!"
//   if (number == 101) return "101 DALMATIANS!!!"
//   }

// function stringToArray(str){
// var array = str.split(", ");
// console.log(array);
// }