// console.log("hello world");
let res = document.getElementsByClassName("item1");
function buttonClick(button) {
  switch (button.innerHTML) {
    case "=":
      let output;
      try {
        output = eval(res[0].innerHTML);
      } catch (e) {
        output = "Please enter valid input";
      }
      res[0].innerHTML =
        typeof output === "string" ? output : output.toFixed(8);
      break;
    case "C":
      res[0].innerHTML = "";
      break;
    default:
      res[0].innerHTML = res[0].innerHTML + button.innerHTML;
  }
}

const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", () => buttonClick(button));
});
