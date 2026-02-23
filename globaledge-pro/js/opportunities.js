let allData = [];

async function load() {
    try {
        const res = await fetch("data/opportunities.json");
        allData = await res.json();
        display(allData);
    } catch {
        console.log("Error");
    }
}

function display(list) {
    const container = document.getElementById("cards");

    container.innerHTML = list.map(o => `
        <div class="card">
            <h3>${o.title}</h3>
            <p><strong>Country:</strong> ${o.country}</p>
            <p><strong>Organization:</strong> ${o.organization}</p>
            <p><strong>Type:</strong> ${o.type}</p>
            <p><strong>Deadline:</strong> ${o.deadline}</p>

            <a href="${o.link}" target="_blank" class="btn">Apply</a>

            <button onclick="save('${o.title}')">Save ❤️</button>
        </div>
    `).join("");
}

document.getElementById("search").addEventListener("input", e => {
    const filtered = allData.filter(o =>
        o.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    display(filtered);
});

window.save = title => {
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];
    saved.push(title);
    localStorage.setItem("favorites", JSON.stringify(saved));
    alert("Saved!");
};

load();