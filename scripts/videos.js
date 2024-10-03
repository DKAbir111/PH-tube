console.log("Hello from videos.js")
const urlCategories = "https://openapi.programming-hero.com/api/phero-tube/categories";

// Fetching Categories
const fetchCategories = async () => {
    try {
        const fetching = await fetch(urlCategories);
        const data = await fetching.json();
        displayCategories(data.categories);

    }
    catch (err) {
        console.error("Error fetching categories:", err);

    }
}

// Display categories
const displayCategories = (data) => {
    const displayItems = document.getElementById('display-catergories');
    data.forEach((item) => {
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        displayItems.appendChild(button);
    })

}

fetchCategories();