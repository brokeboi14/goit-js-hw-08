const categoriesList = document.querySelectorAll("#categories");
const itemsList = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsList.length}`);
itemsList.forEach(item => {
    const itemTitle = item.querySelector("h2").textContent;
    const itemsElements = item.querySelectorAll("li");
    console.log(`Category: ${itemTitle}`);
    console.log(`Elements: ${itemsElements.length}`);
});
