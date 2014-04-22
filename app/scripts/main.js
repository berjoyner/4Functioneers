//FOR MIKE!

function Restaurant (type, budget){
		this.type = type;
		this.budget = budget;

		this.restaurantSelect = function () {
			if (this.type === "American"){
				if (this.budget === 25){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Shelter tonight!</h1>");	
					console.log("Shelter");
						}else{
							$(".restaurant").append("<h1>You will eat at Seasame tonight!</h1>");
							console.log ("Seasame");
}
}
					if (this.budget === 50){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Coleman Public House tonight!</h1>");	
					console.log("CPH")
						}else{
							$(".restaurant").append("<h1>You will eat at EVO tonight!</h1>")
							console.log ("EVO")
}
}
					if (this.budget === 100){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Halls Chophouse tonight!>/h1>")
					console.log === ("Halls")
						}else{
							$(".restaurant").append("<h1>You will eat at Oak Steak House tonight!</h1>")
							console.log("Oak")
}
}
}
			if (this.type === "Asian"){
				if (this.budget === 25){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Tasty Thai tonight!</h1>");	
					console.log("Tasty");
						}else{
							$(".restaurant").append("<h1>You will eat at Co tonight!</h1>");
							console.log ("Co");
}
}
				if (this.budget === 50){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Tsunami tonight!</h1>");	
					console.log("Tsunami");
						}else{
							$(".restaurant").append("<h1>You will eat at Wasabi tonight!</h1>");
							console.log ("Wasabi");
}
}
				if (this.budget === 100){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Basil tonight!</h1>");	
					console.log("Basil");
						}else{
							$(".restaurant").append("<h1>You will eat at PF Chang's tonight!</h1>");
							console.log ("PFC");
}
}
}
			if (this.type === "Seafood"){
				if (this.budget === 25){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Red's tonight!</h1>");	
					console.log("Reds");
						}else{
							$(".restaurant").append("<h1>You will eat at Noisy Oyster tonight!</h1>");
							console.log ("Oyster");
}
}
				if (this.budget === 50){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Fleet's Landing tonight!</h1>");	
					console.log("Fleets");
						}else{
							$(".restaurant").append("<h1>You will eat at Hyman's tonight!</h1>");
							console.log ("Hyman");
}
}
				if (this.budget === 100){
					var chance = Math.floor(Math.random() * 10 )
					if (chance <= 5){
					$(".restaurant").append("<h1>You will eat at Hank's tonight!</h1>");	
					console.log("Hank");
						}else{
							$(".restaurant").append("<h1>You will eat at Red Drum tonight!</h1>");
							console.log("Drum");
}
}
}
};
var Shelter = new Restaurant ("American", 25);
var Seasame = new Restaurant ("American", 25);
var ColemanPublicHouse = new Restaurant ("American", 50);
var Evo = new Restaurant ("American", 50);
var Halls = new Restaurant ("American", 100);
var Oak = new Restaurant ("American", 100);
var Tasty = new Restaurant ("Asian", 25);
var Co = new Restaurant ("Asian", 25);
var Tsunami = new Restaurant ("Asian", 50);
var Wasabi = new Restaurant ("Asian", 50);
var Basil = new Restaurant ("Asian", 100);
var PFChang = new Restaurant ("Asian", 100);
var Reds = new Restaurant ("Seafood", 25);
var NoisyOyster = new Restaurant ("Seafood", 25);
var Fleets = new Restaurant ("Seafood", 50);
var Hymans = new Restaurant ("Seafood", 50);
var Hanks = new Restaurant ("Seafood", 100);
var RedDrum = new Restaurant ("Seafood", 100);
					
			


function Activity(budget, indoor, outdoor) {
	this.budget = budget;
	this.indoor = budget;
	this.outdoor = budget; 

	this.budAct = function(target) {
		if (this.budget === 25) {

			if(this.indoor === true) {
			console.log("You are eligible for a Movie Activity")

		} else {
			console.log("You are eligible for a MiniGolf Activity")
		}
		
		} else if(this.budget ====  50) {

			if(this.indoor ==== true) {
				console.log("You are eligible for a Painting Activity")

		} else {
				console.log("You are eligible for a Kayak Activity")

		}

		} else if(this.budget === 100) {

			if(this.indoor === true) {
				console.log("You are eligible for a Concert Activity")
		}

		} else {
			console.log("You are eligible for a Fishing Charter Activity")
		}


	}

	function Transportation(type, budget) {
	this.name = name;
	this.budget = budget;
	this.type = type;

var Limo = new Transportation("Limo", 100);
var Taxi = new Transportation("Taxi", 50);
var Car = new Transportation("Car", 25);

if (this.budget === 25) {
 $( ".transportation" ).append( "<h1>You will be taking a car!</h1>" )
 	console.log("Car!!!!!");
}
if (this.budget === 50) {
 $( ".transportation" ).append( "<h1>You will be taking a Taxi!</h1>" )
}
if (this.budget === 100) {
 $( ".transportation" ).append( "<h1>You will be taking a Limo!</h1>" )
}}