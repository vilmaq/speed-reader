const timerEl = document.getElementById("countdown");
const mainEl = document.getElementById("main");

const message =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
const words = message.split(" ");

function countdown() {
  let timeLeft = 5;

  const callback = function () {
    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
    if (timeLeft > 0) {
      console.log(timeLeft);
      timerEl.textContent = `${timeLeft} seconds remaining`;
      timeLeft -= 1;
    }
  };

  const timeInterval = setInterval(callback, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  let wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds

  const callback = function () {
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer

      clearInterval(msgInterval);
    } else {
      // Display one word of the message

      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  };
  const msgInterval = setInterval(callback, 1000);
}
countdown();
