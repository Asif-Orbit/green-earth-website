const plantLoad = () => {
    manageSpinnerForCard(true)
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            plantDisplay(data.plants)

        })

}
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
                                    <button onclick="plantCartLoad(${plant.id})" class="btn bg-[#15803D] rounded-full text-white w-full border-none shadow-sm hover:bg-black">Add to Cart</button>
                                </div>
                            </div>
                        </div>
        `
        cardContainer.appendChild(div)
    });
    manageSpinnerForCard(false)
}
const removeActive = () => {
    const categoryBtns = document.querySelectorAll(".category-btn")
    const allTrees = document.getElementById("all-trees")
    allTrees.classList.remove("active")
    categoryBtns.forEach(btn => {
        btn.classList.remove("active")
    })

}
const manageSpinnerForCategory = (status) => {
    if (status == true) {
        document.getElementById("spinner1").classList.remove("hidden")
        document.getElementById("category-container").classList.add("hidden")

    } else {
        document.getElementById("spinner1").classList.add("hidden")
        document.getElementById("category-container").classList.remove("hidden")
    }
}
const manageSpinnerForCard = (status) => {
    if (status == true) {
        document.getElementById("spinner2").classList.remove("hidden")
        document.getElementById("card-container").classList.add("hidden")
    } else {
        document.getElementById("spinner2").classList.add("hidden")
        document.getElementById("card-container").classList.remove("hidden")
    }
}


const categoriesNameLoad = () => {
    manageSpinnerForCategory(true)
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            categoriesNameDisplay(data.categories)
        })
}
const categoriesNameDisplay = (plantNames) => {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = `<p id="all-trees" onclick="plantLoad(); allTree()" class="cursor-pointer font-medium text-black rounded-[4px] pl-3 py-1 active .category-btn">All Trees</p>`
    plantNames.forEach(name => {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <p id="category-btn-${name.id}" onclick="categoriesCardLoad(${name.id})" class="font-medium  rounded-[4px] pl-3 py-1 mt-3 cursor-pointer category-btn text-black">${name.category_name}</p>
        `
        categoryContainer.appendChild(categoryDiv);
    })
    manageSpinnerForCategory(false)

}
const allTree = () => {
    removeActive();
    const allTrees = document.getElementById("all-trees")
    allTrees.classList.add("active")

}
const categoriesCardLoad = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const categoryBtn = document.getElementById(`category-btn-${id}`);
            categoryBtn.classList.add("active");
            categoriesCardDisplay(data.plants)
        })
}
const categoriesCardDisplay = (categoryPlants) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    categoryPlants.forEach(plant => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card bg-base-100 shadow-sm min-h-fit">
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
                                    <button onclick="plantCartLoad(${plant.id})" class="btn bg-[#15803D] rounded-full text-white w-full border-none shadow-sm hover:bg-black">Add to Cart</button>
                                </div>
                            </div>
                        </div>
        `
        cardContainer.appendChild(div)
    });
}
categoriesNameLoad()



// cart part js 
const plantCartLoad = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => carts(data.plants))
}
const carts = (item) => {
    alert(`${item.name}` + " price ৳" + `${item.price}` + " has been added to your cart!")
    const cartContainer = document.getElementById("cart-container");
    const cartDiv = document.createElement("div")
    cartDiv.innerHTML = `
                <div id="cart-item-${item.id}" class=" bg-[#F0FDF4] rounded-lg py-2 px-3 flex justify-between items-center mt-3">
                        <div class="">
                            <h2 class="text-[14px] text-[#1F2937] font-semibold">${item.name}</h2>
                            <p class="text-[16px] text-[#1F293750]">৳<span class="price">${item.price}</span> x <span id="count">1</span></p>
                        </div>
                        <span onclick="removeItem(${item.id})" class="text-[#8C8C8C] text-xs cursor-pointer"><i class="fa-solid fa-x"></i></span>

                </div>
        `;
    const totalAmount = document.getElementById("total-amount");
    const totalAmountInt = parseInt(document.getElementById("total-amount").innerText)
    const latestTotalAmount = totalAmountInt + parseInt(item.price);
    totalAmount.innerText = latestTotalAmount;
    cartContainer.appendChild(cartDiv)
}
const removeItem = (id) => {
    const itemToRemove = document.getElementById(`cart-item-${id}`);
    if (itemToRemove) {
        const totalAmount = document.getElementById("total-amount");
        const totalAmountInt = parseInt(totalAmount.innerText);
        const price = itemToRemove.querySelector(".price");
        const priceInt = parseInt(price.innerText)
        totalAmount.innerText = totalAmountInt - priceInt;

        itemToRemove.remove();

    }
}
plantLoad()