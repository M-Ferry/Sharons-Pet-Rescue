////Start coding

const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

/// 
const createPet = function (name, species) {
	const pet = {
		name: name,
		species: species,
		isTired: 5, // 1 is refreshed, 10 is exhausted
		sleep: function () {
			console.log(`${this.name} needs a nap. Zzzz...`);
			this.isTired = 1;
		},
		play: function () {
			if (this.isTired === 10) {
				console.log("To tired to play....");
				this.sleep();
			} else {
				console.log(`Yay! ${this.name} loves to play!!!`);
				this.isTired += 1;
			}
		}
	};
////calling the function
	return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//clover.sleep();
//baxter.play();

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

//console.log(allPets);
// display pets in browser
const showPets = function (petArray) {
	//empty list
	pets.innerHTML = "";

	for (let pet of petArray) {
		let status = "Ready to Play!!!";
		if (pet.isTired >= 7) {
			status = "sleeping.";
		}
		const li = document.createElement("li");
		li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
		pets.append(li);
	}
};

statusButton.addEventListener("click", function () {
	showPets(allPets);
});
