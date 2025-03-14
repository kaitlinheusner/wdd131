import recipes from "./recipes.mjs"

function getRandomIndex(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry (list){
    const list_length = list.length;
    const randomNum = getRandomIndex(list_length);
    return list[randomNum];
}


function recipeTemplate (recipe) {
    return `<article class="recipe">
    <img class="recipe-image" src="${recipe.image}" alt="Apple Crisp with Ice Cream in a bowl">
    <div class="recipe-content">
        <div class="tag-container">
            ${tagsTemplate(recipe.tags)}
        </div>
        <div class = "main-text">
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            <span
                class="rating"
                role="img"
                aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingTemplate(recipe.rating)}
            </span>
        </div>
    </div>
</article>`;
}

function tagsTemplate(tags){
    let html = "";

    for (let i = 0; i< tags.length; i++) {
        html += `<span class="tag">${tags[i]}</span>`;
    }

    return html;
}

function ratingTemplate(rating) {
    let html = `<span
                class="rating"
                role="img"
                aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++){
        if (i <= rating) {
           html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function renderRecipes(recipeList){
    const output = document.getElementById("recipesContainer");
    
    let recipesHTML = "";
    for (let i = 0; i < recipeList.length; i++) {
        recipesHTML += recipeTemplate(recipeList[i])
    }

    output.innerHTML = recipesHTML;
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

init();

function sortFunction (a, b){
    return a.name.localeCompare(b.name);
}

function filter(query) {
    query = query.toLowerCase()
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) || 
        (Array.isArray(recipe.tags) && recipe.tags.find(tag => tag.toLowerCase().includes(query))) ||
        (Array.isArray(recipe.ingredients) && recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(query)))
    );

    return filtered.sort(sortFunction);
}

function searchHandler(event){
    event.preventDefault();

    let query = document.getElementById("searchform").value.trim().toLowerCase();
    console.log("Search query:", query);
    const filteredRecipes = filter(query);
    renderRecipes(filteredRecipes);
}

document.getElementById("search-button").addEventListener("click", searchHandler);

const recipe = getRandomListEntry(recipes)
console.log(recipeTemplate(recipe));