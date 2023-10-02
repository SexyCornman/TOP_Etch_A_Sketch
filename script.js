

const gridContainer = document.querySelector('#grid-container');
const column = document.querySelector('#column');






function createGrid(gridNum){   
    let n = gridNum; 
    for(i=0; i < gridNum;i++){
    const row  = document.createElement('div');
    row.setAttribute('id','column');   
    gridContainer.appendChild(row);   

        for(j=0; j < gridNum;j++){
        const pixel = document.createElement('div');
        pixel.classList.add('gridcell');
        row.appendChild(pixel);
    }                    

    }
}



