let bodyHTML = document.querySelector("body");
let gridDiv = "";
let gridItem = "";

//Button div
let buttonDiv = document.createElement("div");
buttonDiv.style.className = "button-div";
bodyHTML.appendChild(buttonDiv);

//Grid container
let gridContainer = document.createElement("div")
gridContainer.style.className = "grid-container";
bodyHTML.appendChild(gridContainer);




//Choose grid subdivision
let subdivisionButton = document.createElement("button");
let subdivisionButtonText = document.createTextNode("Choose a subdivision");
subdivisionButton.style.padding = "25px 150px";
subdivisionButton.style.margin = "30px";
subdivisionButton.appendChild(subdivisionButtonText);
buttonDiv.appendChild(subdivisionButton);

//Reset button
let resetButton = document.createElement("button");
let resetButtonText = document.createTextNode("Reset grid");
resetButton.style.padding = "25px 150px";
resetButton.style.margin = "30px";
resetButton.appendChild(resetButtonText);
buttonDiv.appendChild(resetButton);

//Select number of tiles
subdivisionButton.addEventListener("click", () => {


    let numberOfSquares = prompt("Choose how many squares per side", "");

    let gridDiv = document.createElement("div");
    gridDiv.className += "grid-container-empty";
    gridContainer.appendChild(gridDiv);
    gridDiv.style.display = "grid";
    gridDiv.style.width = "600px";
    gridDiv.style.height = "600px";
    gridDiv.style.gridTemplateColumns = `repeat(${numberOfSquares}, auto)`;
    gridDiv.style.gridTemplateRows = `repeat(${numberOfSquares}, auto)`;
    let createGridLayout = numberOfSquares * numberOfSquares

    //Creates square subdivision
    gridDiv.className += "grid-container-full";
    for (i = 0; i < createGridLayout; i++) {
        let gridItem = document.createElement("div");
        gridItem.className += "grid-item";
        gridItem.id += "grid-item";

        gridItem.style.backgroundColor = "red";
        gridDiv.appendChild(gridItem);

        //Generates a random RGB value 
        function changeColor(e) {
            if (gridItem.style.backgroundColor = "red") {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
                gridItem.style.backgroundColor = rgb;
            }
        }
        //Randomly changes square color when mouse hovers
        let colorChange = document.getElementsByClassName(
            "grid-item")[i].addEventListener("mouseover", changeColor);
    }
    resetButton.addEventListener("click", () => {
        console.log("caca");
        gridContainer.innerHTML = "";
    })
    
})

//Reset grid function
