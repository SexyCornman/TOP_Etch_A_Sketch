


// function createGrid() {
//     for(i=0; i < allGridCell.length; i++){
//     allGridCell[i].style.backgroundColor ='yellow';
//     }
// }

const gridContainer = document.querySelector('#grid-container');




// testing


function createGrid(gridNum){   
    let n = gridNum; 
    for(i=0; i < gridNum;i++){
    const div = document.createElement('div');
    gridContainer.append(div)
    div.setAttribute('id','column');               

    }
}









