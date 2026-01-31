document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const timestamp = document.getElementById("timestamp");
  if (timestamp) timestamp.value = new Date().toISOString();

  document.querySelectorAll("[data-modal]").forEach(btn => {
    const modal = document.getElementById(btn.dataset.modal);
    btn.addEventListener("click", () => modal.showModal());
    modal.querySelector("button").addEventListener("click", () => modal.close());
  });

  const output = document.getElementById("form-data");
  if (output) {
    const params = new URLSearchParams(window.location.search);
    output.innerHTML = `
      <p><strong>Name:</strong> ${params.get("fname")} ${params.get("lname")}</p>
      <p><strong>Email:</strong> ${params.get("email")}</p>
      <p><strong>Phone:</strong> ${params.get("phone")}</p>
      <p><strong>Business:</strong> ${params.get("business")}</p>
      <p><strong>Date:</strong> ${params.get("timestamp")}</p>
    `;
  }
});
