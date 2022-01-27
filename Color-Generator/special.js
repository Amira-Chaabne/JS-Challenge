let suggested = document.getElementById("suggested");
let random = document.getElementById("random");
let currentUrl = window.location.href;
let getLastItem = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

if (getLastItem === "index.html") {
  suggested.style.color = "#DAAA1B";
  //   suggested.classList.add("active");
} else {
  random.style.color = "#DAAA1B";
  //   random.classList.add("active");
}
