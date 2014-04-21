function Restaurant (type, budget){
		this.type = type;
		this.budget = budget;

		this.foodBudget = function () {
			if (this.type === "American"){
				if (this.budget === 25){
					var chance = Math.floor(Math.random() * 10 )
					if chance <= 5
					console.log("Shelter")
						}else{
							console.log ("Seasame")
}
}


				if (this.budget === 50){
					console.log ("You are eligible for EVO or Coleman Public House")}
				if (this.budget === 100){
					console.log === ("You have the funds for Halls Chophouse or Oak Steak House. Congrats!")}
};
			if (this.type === "Asian"){
				if (this.budget === 25){
					console.log("You are eligible for Tasty Thai or Co")}
				if (this.budget === 50){
					console.log("You are eligible for Wasabi or Tsunami")}
				if (this.budget === 100){
					console.log("You have the funds to splurge at Basil or PF Chang's")}
};
			if (this.type === "Seafood"){
				if (this.budget === 25){
					console.log ("You are eligible for Noisy Oyster or Red's Icehouse")}
				if (this.budget === 50){
					console.log ("You are eligible for Fleet's Landing or Hyman's")}
				if (this.budget === 100){
					console.log ("You have the funds to splurge at Hank's or Red Drum")}
};
}
}					
				



 