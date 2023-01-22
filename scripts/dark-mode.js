const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("On")) {
    body.style.background = "#000";
    body.style.color = "#fff";
    modeButton.textContent = "Off";
  } else {
    body.style.background = "#eee";
    body.style.color = "#000";
    modeButton.textContent = "On";
  }
});
