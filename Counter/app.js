
let value = 0;

let buttons = document.querySelectorAll(".btn");
let counter = document.querySelector(".CounterValue");


console.log(buttons);
buttons.forEach(function (btn) {
  console.log("inside foreach", btn);
  btn.addEventListener("click", makeAChange);
});


function makeAChange(e) {
  console.log("clicked");
  let btnClass = e.currentTarget.classList;
  console.log(btnClass);
  if (btnClass.contains("decrease")) {
    value--;
  } else if (btnClass.contains("increase")) {
    value++;
  } else value = 0;
  counter.textContent = value;
}

// the difference between textContent and innerHtml
