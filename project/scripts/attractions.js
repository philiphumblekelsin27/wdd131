
const attractions = [
    {
        name: "National Museum Benin",
        type: "museum",
        history: "In the heart of Nigeria, nestled on King’s Square, lies the Benin City National Museum, an institution rich in history and cultural significance. This prestigious museum was established in 1973 and since then, it has served as a custodian of Nigeria’s rich and diverse cultural heritage. A stroll through its corridors takes you on a journey through time, where you’ll encounter an array of artifacts from the illustrious Benin Empire. Immerse yourself in the intricacy of the terracotta and bronze figures, or marvel at the artistry of the cast iron pieces that are steeped in ancient traditions.But the museum’s collection is not just confined to the Benin Empire.It’s also home to treasures from surrounding ancient city- states, making it one of the richest national museums in Nigeria in terms of historical breadth.As it stands, the museum is at the forefront of the fight for the return of thousands of artifacts taken from the city over a century ago by the British government.",
        location: "King's Square (Ring Road)",
        image: "images/museum.webp"
    },
    {
        name: "The Royal Palace of the Oba",
        type: "historical",
        history: "A UNESCO World Heritage site and the seat of the Oba of Benin, rebuilt after the 1897 expedition.",
        location: "Palace Rd, Benin City",
        image: "images/palace.webp"
    },
    {
        name: "Okomu National Park",
        type: "park",
        history: "A remnant of the Nigerian lowland forests, home to the endangered white-throated monkey.",
        location: "Ovia South-West",
        image: "images/okomu.webp"
    },
    {
        name: "Igun Bronze Casters Street",
        type: "historical",
        history: "The cradle of the bronze casting industry. Casters here still use the ancient 'lost-wax' method.",
        location: "Igun Street",
        image: "images/igun.webp"
    },
    {
        name: "The Benin Moat (Iya)",
        type: "historical",
        history: "The world's largest earthwork carried out prior to the mechanical era, used for city defense.",
        location: "Various locations (City wide)",
        image: "images/moat.webp"
    },
    {
        name: "Kada Plaza",
        type: "park",
        history: "A modern entertainment hub featuring cinemas, eateries, and a mini-zoo.",
        location: "Sapele Road",
        image: "images/kada.webp"
    }
];

/* --- SELECT DOM ELEMENTS --- */
const container = document.querySelector("#attractions-container");
function displayAttractions(list) {
    if (!container) return;

    container.innerHTML = "";

    list.forEach(item => {
        const card = document.createElement("section");
        card.className = "card";


        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="250">
            <div class="card-content">
                <p class="tag">${item.type.toUpperCase()}</p>
                <h3>${item.name}</h3>
                <p><strong>History:</strong> ${item.history}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <button class="fav-btn" data-name="${item.name}">❤️ Save to Favorites</button>
            </div>
        `;
        container.appendChild(card);
    });
    setupFavoriteListeners();
}
function filterAttractions(category) {
    if (category === "all") {
        displayAttractions(attractions);
    } else {
        const filtered = attractions.filter(attr => attr.type === category);
        displayAttractions(filtered);
    }
}

function setupFavoriteListeners() {
    const favButtons = document.querySelectorAll(".fav-btn");
    favButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const name = e.target.getAttribute("data-name");
            let favorites = JSON.parse(localStorage.getItem("beninFavorites")) || [];

            if (!favorites.includes(name)) {
                favorites.push(name);
                localStorage.setItem("beninFavorites", JSON.stringify(favorites));
                alert(`SUCCESS: ${name} added to your travel plan!`);
            } else {
                alert("NOTICE: This is already in your favorites.");
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    displayAttractions(attractions);
    const allBtn = document.querySelector("#filter-all");
    const museumBtn = document.querySelector("#filter-museum");
    const historicalBtn = document.querySelector("#filter-historical");
    const parkBtn = document.querySelector("#filter-park");
    if (allBtn) allBtn.addEventListener("click", () => filterAttractions("all"));
    if (museumBtn) museumBtn.addEventListener("click", () => filterAttractions("museum"));
    if (historicalBtn) historicalBtn.addEventListener("click", () => filterAttractions("historical"));
    if (parkBtn) parkBtn.addEventListener("click", () => filterAttractions("park"));
});