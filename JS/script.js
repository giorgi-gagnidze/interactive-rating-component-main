let buttons = document.querySelectorAll("button");
function showNumber() {
  if (this.value == 1) {
    document.getElementById("number").innerHTML = this.value;
  } else if (this.value == 2) {
    document.getElementById("number").innerHTML = this.value;
  } else if (this.value == 3) {
    document.getElementById("number").innerHTML = this.value;
  } else if (this.value == 4) {
    document.getElementById("number").innerHTML = this.value;
  } else if (this.value == 5) {
    document.getElementById("number").innerHTML = this.value;
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", showNumber);
});

function changeCard() {
  document.getElementById("second").style.display = "flex";
  document.getElementById("main").style.display = "none";
}
