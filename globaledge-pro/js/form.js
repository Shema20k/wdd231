const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

const results = document.getElementById("results");

if (results) {
    const params = new URLSearchParams(window.location.search);

    results.innerHTML = `
        <p><strong>Name:</strong> ${params.get("name")}</p>
        <p><strong>Email:</strong> ${params.get("email")}</p>
        <p><strong>Plan:</strong> ${params.get("plan")}</p>
    `;
}
