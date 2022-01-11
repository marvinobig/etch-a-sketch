document.getElementById("generate").addEventListener("click", gridGen);

function gridGen() {
    let gridSize = document.getElementById("gridInput").value; //Initialise a variable that gets grid size data from from text input.
    let gridNum = Number(gridSize); //Turn variable data from string to number data type.
        
    //Use variable data to create columns & rows of the same number.
    let gridContainer = document.getElementById("gridDisplay"); 
        
    for (i = 0; i < gridNum; i++) {
        let gridParent = document.createElement("div");
        gridParent.classList.add("gridParent");
        gridContainer.appendChild(gridParent);
    
        for (j = 0; j < gridNum; j++) {
            let gridChild = document.createElement("div");
            gridChild.classList.add("gridChild");
            gridParent.appendChild(gridChild);
        };
    };
};




document.getElementById("useColor").addEventListener("click", colorChoice);

function colorChoice() {    
    //Initialise a variable that gets color choice from the down menu.
    //Initialise another variable that gets the user's custom color choice from form text input in hex code format.
    //Use variable data to set background color of generated grid by using class name (gridChild) for the generated grid to target them. 
    //Add an event listener for mouse hover that triggers the function.
};




document.getElementById("reset").addEventListener("click", reset);

function reset() {
    //A reset  button can be clicked to erase grid & color choices.
};
