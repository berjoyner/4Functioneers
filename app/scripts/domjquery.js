$(document).ready(
	$(".btn").click(function(e) {
	e.preventDefault();
	console.log("im working");
	var valTrans = Number($(".transportation").val());
	var yourTransport = new Transportation(valTrans);
	var valAct = Number($(".activitySelect").val());
	var valActBudg= Number($(".actBudget").val());
	var yourActivity = new Activity (valAct, valActBudg);
	var yourDate = yourActivity.generateActivity();

	// var yourDate = yourActivity.generateActivity(valAct, ValActBudg);

	// $("something").append(yourDate)

// 	var difficulty = $(".classroomSelect").val();
// 	var varClassroom = new Classroom() 
// 	varClassroom.difficulty(difficulty, varSleep);
// 	console.log(varSleep.life);
// var varLife=(varCoffee.life + varSleep.life);

})
);