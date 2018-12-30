// // console.log("connected");

// I am creating a quizz app
// this quiz app will record the data that the user submits
// this data is stored in an array will run through a loop to see if correct or not
// this user will then be notified if their answer is correct or not 


var quizzApp = [
{
	question: document.getElementById("one"),
	answer: "winter olympics"
},

{
	question: document.getElementById("two"),
	answer: "centennial state"
},
	
{
	question: document.getElementById("three"),
	answer: "mt elbert"
},

{
	question: document.getElementById("four"),
	answer: "colorado blue spruce"
},
	
{
	question: document.getElementById("five"),
	answer: "snow"
}
];

function questions() {
var first = document.getElementById("first").value;
var second = document.getElementById("second").value;
var third = document.getElementById("third").value;
var fourth = document.getElementById("fourth").value;
var fifth = document.getElementById("fifth").value;
var numCorrect = 0;
var numWrong = 0;


console.log(quizzApp[0].answer)

var correct = document.getElementById("correct")
var wrong = document.getElementById("incorrect")




for(var i = 0; i < quizzApp.length; i++) {
	if(first == quizzApp[i].answer || second == quizzApp[i].answer || third == quizzApp[i].answer || fourth == quizzApp[i].answer || fifth == quizzApp[i].answer)
{
console.log("this is correct");
quizzApp[i].question.style.color = "green";
numCorrect++;


}else {
	console.log("this is not correct")
	quizzApp[i].question.style.color = "red";
	numWrong++;
}
}

correct.innerHTML = "correct answers:" + " " + numCorrect
wrong.innerHTML = "incorrect answers:" + " " +numWrong

}

