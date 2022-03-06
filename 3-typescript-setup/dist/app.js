"use strict";
const button = document.querySelector("button");
const handlerButton = (e) => {
    console.log(e);
};
if (button) {
    button.addEventListener("click", handlerButton.bind(this));
}
//# sourceMappingURL=app.js.map