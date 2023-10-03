
const gridContainer = document.querySelector('#grid-container');
const DEFAULT_SIZE = 16 
const color = document.getElementById('brush-color');
let currentGridSize = "";
let mainColor = color.value;





function createGrid(gridNum){   
    let n = gridNum; 
    currentGridSize = n;
    for(i=0; i < gridNum;i++){
    const row  = document.createElement('div');
    row.setAttribute('id','column');   
    gridContainer.append(row);   

        for(j=0; j < gridNum;j++){
        const pixel = document.createElement('div');
        pixel.classList.add('gridcell');
        row.append(pixel);
        pixel.addEventListener('mouseenter' , (e) => {
            pixel.style.backgroundColor = mainColor ;
        })
        
    }                 
       }
       
}

function gridReset() {
    gridContainer.innerHTML ="";
    createGrid(currentGridSize);
}

function changeGridSize() {
    let gridSize = prompt ("please select grid size between 1 to 100");
    if (gridSize > 0 && gridSize <=100){
        gridContainer.innerHTML ="";
        createGrid(gridSize);
    }
    else alert("nah that wont work");
}

function randColor()  {
    let random = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    mainColor = random
}




createGrid(DEFAULT_SIZE);




