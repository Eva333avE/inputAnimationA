const h1 = document.querySelector("h1"),
  strH1 = h1.textContent,
  splitH1 = strH1.split("");

h1.textContent = "";

for (let i = 0; i < splitH1.length; i++) {
  h1.innerHTML += "<span>" + splitH1[i] + "</span>";
  if (splitH1[i] === " ") {
    h1.innerHTML += " ";
  }
  console.log(h1.innerHTML);
}

let char = 0;
let timer = setInterval(addClassToEachSpan, 5000);

function addClassToEachSpan() {
  const span = h1.querySelectorAll("h1")[char];
  h1.classList.add("fade");
  char++;
  if (char === splitH1.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
