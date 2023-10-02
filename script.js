


// function createGrid() {
//     for(i=0; i < allGridCell.length; i++){
//     allGridCell[i].style.backgroundColor ='yellow';
//     }
// }

const gridContainer = document.querySelector('#grid-container');
const allGridCell = document.querySelectorAll('#grid-cell');
const column = document.querySelectorAll;('#column');


// testing
function createGrid(gridNum){
    for(i=0; i < gridNum;i++){
    const griddiv = document.createElement('div');
    column[i].append(griddiv)
    griddiv.setAttribute('id','grid-cell');
    griddiv.classList.add('gridcell');   

}
}

function createColumn(gridNum){   
    let n = gridNum; 
    for(i=0; i < gridNum;i++){
    const div = document.createElement('div');
    gridContainer.append(div)
    div.setAttribute('id','column');               

    }
}









