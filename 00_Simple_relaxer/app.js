//
//
const container = document.querySelector(".container"),
  text = document.querySelector("#text");

const totalTime = 7500,
  breathTime = (totalTime / 5) * 2,
  holdTime = totalTime / 5;

breadAnimation();

function breadAnimation() {
  text.innerHTML = "Bread IN!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "breath Out";
      container.className = "container shrink";
    }, holdTime);
    //
  }, breathTime);
}

setInterval(breadAnimation, totalTime);
