const button = document.querySelector("button");

const handlerButton = (e: object): void => {
  console.log(e);
};

if (button) {
  button.addEventListener("click", handlerButton.bind(this));
}
