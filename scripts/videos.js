console.log("Hello from videos.js")
const urlCategories = "https://openapi.programming-hero.com/api/phero-tube/categories";
const urlVideos = 'https://openapi.programming-hero.com/api/phero-tube/videos';


//timeConverterFunction
const timeConverter = (sec) => {
    const hrs = Math.floor(sec / 3600);
    const remainingSec = sec % 3600;
    const mins = Math.floor(remainingSec / 60);
    const seconds = remainingSec % 60;
    return `${hrs}hrs ${mins}min ago`
}


// Fetching Categories button
const fetchCategories = async () => {
    try {
        const fetching = await fetch(urlCategories);
        const data = await fetching.json();
        displayCategories(data.categories);

    }
    catch (err) {
        console.error("Error fetching categories:", err); 6

    }
}

// Fetching Categories videos
const fetchCategoriesvideos = async (id) => {
    try {
        const fetching = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
        const data = await fetching.json();
        displayVideos(data.category);

    }
    catch (err) {
        console.error("Error fetching videos categories:", err);

    }
}


// Display categories Button
const displayCategories = (data) => {
    const displayItems = document.getElementById('display-catergories');
    data.forEach((item) => {
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        displayItems.appendChild(button);
        button.addEventListener('click', async () => {
            button.disabled = true;
            await fetchCategoriesvideos(item.category_id);
            button.disabled = false;
        });


    })

}


// Fetching videos
const fetchVideos = async () => {
    try {
        const fetching = await fetch(urlVideos);
        const data = await fetching.json();
        displayVideos(data.videos);
    }
    catch (err) {
        console.error("Error fetching videos:", err);
    }
}



//Display videos
const displayVideos = (data) => {
    console.log(data);
    displayItems = document.getElementById('display-videos');
    displayItems.innerHTML = "";
    data.forEach((item) => {
        const div = document.createElement('div');
        div.classList = "card card-compact";
        div.innerHTML = `
 <figure class="relative">
    <img src="${item.thumbnail}" alt="thumbnail" class="h-[200px] w-full object-cover" />

    ${item.others.posted_date?.length == 0 ? null : `<span class="absolute bottom-1 right-1 bg-stone-800 text-white rounded p-1 text-xs">${timeConverter(item.others.posted_date)}</span>`}
  
</figure>

<div class="px-0 py-5 flex gap-5">
    <div>
        <img src=${item.authors[0].profile_picture} class="h-10 w-10 rounded-full object-cover" alt=${item.title} />
    </div>

    <div>
        <h2 class="font-semibold text-lg">${item.title}</h2> 
        <div class="flex items-center gap-1">

            <p class="text-stone-500">${item.authors[0].profile_name}</p>
            ${item.authors[0].verified ? '<img src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000" alt="verified" class="h-5 w-5" />' : null}
            
        </div>
        <p class="text-stone-400 text-sm">${item.others.views}</p>
    </div>
</div>
        `
        displayItems.appendChild(div);
    })

}

// Calling function
fetchCategories();
fetchVideos();

