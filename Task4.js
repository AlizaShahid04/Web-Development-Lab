// Functions

// 4. Manipulating software house names

let softwareHouses = ["Google", "Microsoft", "Apple", "Amazon", "Facebook"];
softwareHouses.shift(); // Remove first
softwareHouses.splice(2, 1, "Oracle"); // Replace middle item
softwareHouses.push("Netflix"); // Add at the end
console.log("Updated Software Houses:", softwareHouses);