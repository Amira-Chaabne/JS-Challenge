const colors = ["#f2cc8f", "#81b29a", "#3d405b", "#e07a5f", "#f4f1de"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Event listeners
btn.addEventListener("click", renderingF);

// Functions

function renderingF() {
  const randomCode = getRandomColor();
  document.body.style.backgroundColor = colors[randomCode];
  color.textContent = colors[randomCode];
  color.style.color = colors[randomCode];
}

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
