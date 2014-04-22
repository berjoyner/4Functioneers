$(document).ready({
	$(".btn").click(function(e) {
	e.preventDefault();
	console.log("im working");
	var transportation = Text($(".transportation").val());
	var yourTransport = new Transportation(budget);
// 	var cups = Number($(".coffeeSelect").val());
// 	var varCoffee= new Coffee(cups);
// 	var difficulty = $(".classroomSelect").val();
// 	var varClassroom = new Classroom() 
// 	varClassroom.difficulty(difficulty, varSleep);
// 	console.log(varSleep.life);
// var varLife=(varCoffee.life + varSleep.life);

})
});