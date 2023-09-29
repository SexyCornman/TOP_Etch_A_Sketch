


function createGrid() {
    for(i=0; i < allGridCell.length; i++){
    allGridCell[i].style.backgroundColor ='yellow';
    }
}

const gridContainer = document.querySelector('#grid-container');
const allGridCell = document.querySelectorAll('#grid-cell');
const column = document.querySelectorAll('#column');


// testing
function createColumn(gridNum){    
    for(i=0; i < gridNum;i++){
    const div = document.createElement('div');
    gridContainer.append(div)
    div.setAttribute('id','column');               
            
    }
}








