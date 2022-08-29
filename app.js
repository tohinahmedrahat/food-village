function loadData (name){
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.meals))
}
function displayData(data){
    const divContainer = document.getElementById("card");
    divContainer.innerHTML=""
    data.map(data => {
        const div= document.createElement("div")
        div.innerHTML='';
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src="${data.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${data.strMeal}</h5>
            <p class="card-text">
             ${data.strInstructions.slice(0,200)}
            </p>
          </div>
        </div>
      </div>
        `
        divContainer.appendChild(div)
        
    })
}
document.getElementById("search").addEventListener("click",() =>{
    const inputField = document.getElementById("foodName");
    const inputValue = inputField.value;
    console.log(inputValue)
    loadData(inputValue)
})
loadData("a")
