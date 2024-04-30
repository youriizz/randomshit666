const messageArray = [
  "Message pour container-1.",
  "Message pour container-2.",
  "Message pour container-3.",
  "Message pour container-4."
];

let textPosition = 0;
const speed = 100;

const typewriter = () => {
  const typewriterMessage1 = document.querySelector(".typewritermessage-1");
  const typewriterMessage2 = document.querySelector(".typewritermessage-2");
  const typewriterMessage3 = document.querySelector(".typewritermessage-3");
  const typewriterMessage4 = document.querySelector(".typewritermessage-4");

  typewriterMessage1.innerHTML = messageArray[0].substring(0, textPosition) + "<span class='typewriter-cursor'>\u007C</span>";
  typewriterMessage2.innerHTML = messageArray[1].substring(0, textPosition) + "<span class='typewriter-cursor'>\u007C</span>";
  typewriterMessage3.innerHTML = messageArray[2].substring(0, textPosition) + "<span class='typewriter-cursor'>\u007C</span>";
  typewriterMessage4.innerHTML = messageArray[3].substring(0, textPosition) + "<span class='typewriter-cursor'>\u007C</span>";

  if (textPosition++ != Math.max(...messageArray.map(message => message.length))) {
    setTimeout(typewriter, speed);
  }
}

window.addEventListener("load", typewriter);
