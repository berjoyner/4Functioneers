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

	this.attack = function(target) {
		if( this.type == "Undead") {
			console.log("You are being attacked by a Grinning Ghost!");
			console.log("You have been attacked for 50 points of damage!");
		} else if (this.type =="Demon"){
			console.log("You are being attacked by a Sassy Succubus!");
			console.log("You have been attacked for 100 points of damage!");
		} else if (this.type =="Changling"){
			console.log("You are being attacked by a Wandering Werewolf!");
			console.log("You have been attacked for 150 points of damage!");
		}

