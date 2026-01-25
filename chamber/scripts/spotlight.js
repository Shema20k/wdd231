fetch("data/members.json")
  .then(response => response.json())
  .then(data => {
    const eligible = data.members.filter(m => m.membership >= 2); // Gold or Silver
    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3); // Pick 2–3 randomly
    const container = document.getElementById("spotlight-cards");

    selected.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("spotlight-card");

      const level = member.membership === 3 ? "Gold Member" : "Silver Member";

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${level}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Spotlight fetch error:", error);
  });
