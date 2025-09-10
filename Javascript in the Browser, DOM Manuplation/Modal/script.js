"use strict";
const buttons = document.querySelectorAll(".show-modal");
const modalElement = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");
const overLayElement = document.querySelector(".overlay");
let isModalOpen = false;

const openModal = function () {
  isModalOpen = true;
  // add overlay effect
  overLayElement.classList.remove("hidden");
  // remove hidden from modalElement
  modalElement.classList.remove("hidden");
};

const closeModal = function () {
  isModalOpen = false;
  overLayElement.classList.add("hidden");
  modalElement.classList.add("hidden");
};

buttons.forEach((btn, index) => {
  btn.addEventListener("click", handleClick);
});

closeModalBtn.addEventListener("click", handleClick);

// handling "ESC" event
document.addEventListener("keyup", handleKeyboardEvent);

// handling outside click
document.addEventListener("click", handleOtsideClick);

// Handling Clicks
function handleClick(event) {
  if (!event || event.target.classList[0] === "") return;

  if (event.target.classList[0] === "show-modal") {
    openModal();
  } else if (event.target.classList[0] === "close-modal") {
    closeModal();
  }
}

function handleKeyboardEvent(event) {
  if (event.key === "Escape") {
    isModalOpen = false;
    overLayElement.classList.add("hidden");
    modalElement.classList.add("hidden");
  }
}

function handleOtsideClick(event) {
  if (!isModalOpen) return;

  if (
    !modalElement.contains(event.target) &&
    !event.target.classList.contains("show-modal")
  ) {
    closeModal();
  }
}
