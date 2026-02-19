async function loadFeatured() {
    try {
        const res = await fetch("data/opportunities.json");
        const data = await res.json();

        document.getElementById("featured").innerHTML =
            data.slice(0, 3).map(o => `
                <div class="card">
                    <h3>${o.title}</h3>
                    <p>${o.country}</p>
                </div>
            `).join("");

    } catch (error) {
        console.log("Error loading data");
    }
}

loadFeatured();
