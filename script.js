const panels = document.querySelectorAll(".panel");
var i = 0;

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// diashow

setInterval(() => {
  i++;
  if (i >= panels.length) {
    i = 0;
  }
  removeActive();
  panels[i].classList.add("active");
}, 2000);
