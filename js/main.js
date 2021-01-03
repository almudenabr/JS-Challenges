"use strict";

//*******functions listeners of events

// add sound and modify css when keydown

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
}

window.addEventListener("keydown", listenKey);
