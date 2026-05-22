document.addEventListener("DOMContentLoaded", () => {
  const connectModal = document.querySelector("#connect");
  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector("#close-modal");

  connectModal.addEventListener("click", (e) => {
    modal.classList.remove("hide-modal");
  });

  closeModal.addEventListener("click", (e) => {
    modal.classList.add("hide-modal");
  });
});
