


function clearGrid() {
    for(i=0; i < allGridCell.length; i++){
    allGridCell[i].style.backgroundColor ='yellow';
    }
}

const gridContainer = document.querySelector('#grid-container');
const allGridCell = document.querySelectorAll('#grid-cell');
const column = document.querySelectorAll('.column');