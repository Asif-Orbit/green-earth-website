const plantLoad =() => {
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
    .then(res=> res.json())
    .then(data=> plantDisplay(data.plants))

}
// {
//     "id": 2,
//     "image": "https://i.ibb.co.com/WNbbx3rn/guava-min.jpg",
//     "name": "Guava Tree",
//     "description": "A hardy fruit tree that grows in various climates, yielding guavas packed with Vitamin C. Its low maintenance nature makes it a favorite for home gardens.",
//     "category": "Fruit Tree",
//     "price": 350
// }
const plantDisplay = (plants) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    plants.forEach(plant => {
        
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card bg-base-100 shadow-sm h-full">
                            <figure class="px-4 pt-4">
                                <img src="${plant.image}"
                                    alt="Shoes" class="rounded-xl w-full h-44 object-cover " />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title text-[#1F2937] font-semibold text-[14px]">${plant.name}</h2>
                                <p class="text-[#1F2937] text-xs">${plant.description}</p>
                                <div class="flex items-center">
                                    <div><p class="text-[#15803D] bg-[#DCFCE7] py-1 px-3 rounded-full">${plant.category}</p></div>
                                    <p class="font-semibold text-[14px] text-[#1F2937] flex justify-end"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${plant.price}</span></p>
                                </div>
                                <div class="card-actions">
                                    <button class="btn bg-[#15803D] rounded-full text-white w-full border-none shadow-sm hover:bg-black">Add to Cart</button>
                                </div>
                            </div>
                        </div>
        `
        cardContainer.appendChild(div)
    });
}

plantLoad()