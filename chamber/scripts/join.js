document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const timestamp = document.getElementById("timestamp");
  if (timestamp) timestamp.value = new Date().toISOString();

  document.querySelectorAll("[data-modal]").forEach(button => {
    const modal = document.getElementById(button.dataset.modal);
    const close = modal.querySelector("button");

    button.addEventListener("click", () => modal.showModal());
    close.addEventListener("click", () => modal.close());
  });
});
