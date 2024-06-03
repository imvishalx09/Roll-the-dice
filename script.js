function rollDice() {
  const numofDice = document.getElementById("numofDice").value;
  const diceResults = document.getElementById("diceResults");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for(let i = 0; i < numofDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`Dice_images/dice-six-faces-${["one", "two", "three", "four", "five", "six"][value-1]}.png`);
  }

  diceResults.textContent = "Dice Values: " + values.join(", ");
  diceImages.innerHTML = ""; // Clear previous images

  images.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Dice";
    img.width = 50; // Set the width of the dice images
    diceImages.appendChild(img);
  });
}
