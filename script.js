const generateColorButton = document.getElementById("generateColorButton");
const colorDisplay = document.getElementById("colorDisplay");
const hexCode = document.getElementById("hexCode");

generateColorButton.addEventListener("click", () => {
  const randomColor = getRandomColor();
  colorDisplay.style.backgroundColor = randomColor;
  hexCode.textContent = `Hex Code: ${randomColor}`;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
