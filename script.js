
const gridContainer = document.querySelector('#grid-container');
const DEFAULT_SIZE = 16 





function createGrid(gridNum){   
    let n = gridNum; 
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

function gridReset() {
    gridContainer.innerHTML ="";
    createGrid(16);
}

function changeGridSize() {
    let gridSize = prompt ("please select grid size");
    if (gridSize > 0 && gridSize <=100){
        gridContainer.innerHTML ="";
        createGrid(gridSize);
    }
    else alert("nah that wont work");
}


createGrid(16);

// testing
function colorElement(element){
    element.style.backgroundColor ='yellow'
}

function gridColor(){
const item = document.querySelectorAll('.gridcontainer > div');
item.forEach(colorElement);

}



// const gridCell = document.querySelectorAll('.gridcell');
//        gridCell.addEventListener('mouseenter', (e) => {
//            e.target.style.backgroundColor = 'black';
//          });