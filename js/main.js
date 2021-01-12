"use strict";

//*******functions listeners of events

// add audio and css transition when keydown

function listenKey(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  const audio = document.querySelector(`.audio[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  } else {
    audio.currentTime = 0; //rewind to the start
    audio.play();
  }

  key.classList.add("js-playing");
}

//remove css transition

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  } else {
    this.classList.remove("js-playing");
    console.log("remove transition");
  }
}

//events

window.addEventListener("keydown", listenKey);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
