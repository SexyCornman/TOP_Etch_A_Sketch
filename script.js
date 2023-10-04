
const gridContainer = document.querySelector('#grid-container');
const DEFAULT_SIZE = 16 
const color = document.getElementById('brush-color');
let currentGridSize = "";
let currentColor 





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
    }                 
       }
       
}


// color functions

function customColor() {
    currentColor = "custom";
    const cell = document.querySelectorAll('.gridcell');         
      cell.forEach(item => {
        item.addEventListener('mouseenter' , (e) => {
            item.style.backgroundColor = color.value ;
        })
        
      })
}

function baseColor() {
    currentColor = "black";
    const cell = document.querySelectorAll('.gridcell');         
      cell.forEach(item => {
        item.addEventListener('mouseenter' , (e) => {
            item.style.backgroundColor = 'black' ;
        })
        
      });
    
}

function rgbColor() {
    currentColor = "rgb";
    const cell = document.querySelectorAll('.gridcell');         
      cell.forEach(item => {
        item.addEventListener('mouseenter' , (e) => {
            item.style.backgroundColor = '#' +  Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase(); ;
        })
        
      });
}

function getColor(){
    if (currentColor === "black"){
        baseColor()
    }
    else if (currentColor === "rgb"){
        rgbColor()
    }
    else if (currentColor === "custom")
        customColor()
}

// grid manipulation functions

function gridReset() {
    gridContainer.innerHTML ="";
    createGrid(currentGridSize);
    getColor()
}



function changeGridSize() {
    let gridSize = prompt ("please select grid size between 1 to 100");
    if (gridSize > 0 && gridSize <=100){
        gridContainer.innerHTML ="";
        createGrid(gridSize);
        getColor()
    }
    else alert("nah that wont work");
}




createGrid(DEFAULT_SIZE);
baseColor()
