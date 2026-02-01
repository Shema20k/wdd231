document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const params = new URLSearchParams(window.location.search);
  const container = document.getElementById("form-data");

  container.innerHTML = `
    <p><strong>First Name:</strong> ${params.get("firstName")}</p>
    <p><strong>Last Name:</strong> ${params.get("lastName")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Phone:</strong> ${params.get("phone")}</p>
    <p><strong>Organization:</strong> ${params.get("organization")}</p>
    <p><strong>Title:</strong> ${params.get("orgTitle")}</p>
    <p><strong>Membership Level:</strong> ${params.get("membership")}</p>
    <p><strong>Description:</strong> ${params.get("description")}</p>
    <p><strong>Submitted On:</strong> ${params.get("timestamp")}</p>
  `;
});
