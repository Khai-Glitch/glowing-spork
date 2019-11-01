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

// function tenFour(){
// 	 for (var i = 1; i <= 100; i++){
// 		 if (i%4 === 0 && i%10 === 0){
// 		 	alert('k');
// 		 }
		 
// 		console.log("TenFour"); 
// 		else if (i%4 === 0){
// 			console.log("Four");
// 		}
// 		else if (i%10 === 0){
// 			console.log("Ten");
// 		}
// 		else { 
// 			console.log(i);
// 		}
// 	}
// }
//reference for above code:https://www.w3schools.com/java/java_conditions.asp
//&//
//http://stackprinter.appspot.com/questions/what-is-your-solution-to-the-fizzbuzz-problem.html
//
