fetch("data/members.json")
  .then(response => response.json())
  .then(data => {
    const eligible = data.members.filter(member => member.membership >= 2);
    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);
    const container = document.querySelector("#spotlight-cards");

    selected.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("spotlight-card");

      const level =
        member.membership === 3 ? "Gold" :
        member.membership === 2 ? "Silver" : "Bronze";

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${level} Member</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      container.appendChild(card);
    });
  });
