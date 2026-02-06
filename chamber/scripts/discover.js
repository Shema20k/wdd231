import { places } from "../data/discover.mjs";

const grid = document.getElementById("discover-grid");

places.forEach((place, index) => {
  const card = document.createElement("section");
  card.className = "card";

  card.innerHTML = `
    <h2>${place.title}</h2>
    <figure>
      <img src="${place.image}" alt="${place.title}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button class="learn-btn">Learn More</button>
  `;

  grid.appendChild(card);
});

const message = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / 86400000);
  message.textContent =
    days < 1
      ? "Back so soon! Awesome!"
      : `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
}

localStorage.setItem("lastVisit", now);
document.getElementById("year").textContent = new Date().getFullYear();
