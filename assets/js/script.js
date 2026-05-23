document.addEventListener("DOMContentLoaded", () => {
  const connectModal = document.querySelector("#connect");
  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector("#close-modal");
  const afterSubmitForm = document.getElementById("formContent");
  const submitThanks = document.getElementById("submitThanks");

  // Ouverture de la modal
  connectModal.addEventListener("click", (e) => {
    modal.classList.remove("hide-modal");
  });

  // Fermeture de la modal
  closeModal.addEventListener("click", async (e) => {
    modal.classList.add("hide-modal");
    const toReset = document.getElementById("contactForm");
    toReset.reset();
    afterSubmitForm.classList.remove("hide-modal");
    submitThanks.classList.add("hide-modal");
  });

  // Envoi des données
  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        sujet: document.querySelector("#sujet").value,
      };
      afterSubmitForm.classList.add("hide-modal");
      submitThanks.classList.remove("hide-modal");
<<<<<<< HEAD
      const response = await axios.post("http://localhost:3000/form", data);
=======
      const response = await axios.post(
        "https://site--tripadvisorback--28mw4x9cgqbh.code.run/form",
        data,
      );
      console.log(response);
>>>>>>> develop
    });
});
