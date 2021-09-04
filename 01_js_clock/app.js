setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  // current Date
  const currentDate = new Date();
  console.log(currentDate);
  //   second
  let second = currentDate.getSeconds(); // 0 - 59
  const secondsRatio = second / 60;

  //   minute
  let minute = currentDate.getMinutes(); // 0 - 59
  const minutesRatio = (secondsRatio + minute) / 60;

  //   hour
  let hour = currentDate.getHours(); // 0 - 23
  const hoursRatio = (minutesRatio + hour) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);

  var session = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  var time = hour + ":" + minute + ":" + second + " " + session;

  document.querySelector(".digital-clock").textContent = time;
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
  console.log(rotationRatio);
}

// setClock();

// button
document.querySelector(".button").addEventListener("click", changeColor);

function changeColor(e) {
  console.log(e.target.className);
  if (e.target.className == "btn") {
    console.log("selected");

    console.log(e.target.id);
    let back_color, digi_back_Color;
    if (e.target.id == "btn1") {
      back_color = "red";
    } else if (e.target.id == "btn2") {
      back_color = "yellow";
      digi_back_Color = "#b2b200";
    } else if (e.target.id == "btn3") {
      back_color = "green";
    } else if (e.target.id == "btn3") {
      back_color = "green";
    } else {
      back_color = "blue";
    }

    document.body.style.background = back_color;
  } else {
    console.log("Error");
  }
}
