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

