document.addEventListener("DOMContentLoaded", () => {
  const connectModal = document.querySelector("#connect");
  const modal = document.querySelector("#modal");

  connectModal.addEventListener("click", (e) => {
    modal.classList.remove("hide-modal");
  });
});
