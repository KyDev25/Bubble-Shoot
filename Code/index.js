const counterDisplay = document.querySelector("h3");
let counter = 0;

//Function to create bubble
const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  //Function to generate random size of bubble
  const size = Math.random() * 100 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  //Function to determinate max and min the trajectory of bubble
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  //When bubble clicked, win 1 point + remove bubble
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  //Bubbles are removes every 8 seconds
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

//Function is play every 1 milliseconds
setInterval(bubbleMaker, 100);
