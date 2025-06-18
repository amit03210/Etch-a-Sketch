//Variables
let canvasSize = 250;
let gridNumber = NaN

//Create Element
let resetButton = document.createElement('button');
let changeCanvasSizeButton = document.createElement('button');

//Element Select
let body = document.querySelector('body');
let containers = document.querySelector('.container');


//Styling Element
body.setAttribute('style', 'display: flex; justify-content: center; align-items: center;');
containers.setAttribute("style", `background-color: orange; height: ${canvasSize}px; width: ${canvasSize}px;
    display: flex; flex-direction: row; flex-wrap: wrap;`);
resetButton.textContent = "Reset";
changeCanvasSizeButton.textContent = "Clear Canvas";

// //Appnd
body.appendChild(resetButton);
body.appendChild(changeCanvasSizeButton);
    
canvasCreation(16);

//Event Handler
function canvasCreation(gridNum) {

    for(i=0; i<gridNum*gridNum; i++){
        // containers.remove()
        let gridParent = document.createElement('div');
        let gridBody = document.createElement('div');
        
        containers.appendChild(gridParent);
        gridParent.appendChild(gridBody);

        gridParent.setAttribute('class', 'grid');
        gridParent.setAttribute('style', `height: ${(canvasSize/gridNum)}px; width: ${(canvasSize/gridNum)}px;`)
        // innerGrid.style.border = '1px solid grey';
        gridBody.setAttribute('style', `border: 1px solid rgba(0,0,0,1); height: ${(canvasSize/gridNum)-1}px; width:${(canvasSize/gridNum)-1}px;`)
        // gridBody.setAttribute('data-opacity', '0.1');
        // console.log(canvasSize/(gridNum*2));
        // console.log(gridParent);
    }

    // let gridList = document.querySelector('grid');
    // gridList.foreach((minions) => {
    //     containers.appendChild(minions);
    // })
}

function divHoverColorChange(event){
     event.target.style.backgroundColor = `hsla(120, 100%, 25%, 1)`;
}

//EVENT LISTENER
containers.addEventListener('mouseover',  divHoverColorChange);

changeCanvasSizeButton.addEventListener('click', () =>{
    gridNumber = prompt("Grid Number 1-100?")
    if(gridNumber === NaN || gridNumber === null || gridNumber === undefined)
        gridNumber = 1;
    else if( gridNumber > 100 ){
        while(gridNumber != null && gridNumber > 100) 
            gridNumber = prompt("Please type Grid number less than 100");
    }
    
    document.querySelectorAll('.container .grid').forEach(ele => ele.remove());
    canvasCreation(gridNumber);
    console.log(gridNumber);
})

resetButton.addEventListener('click', () => {
    document.querySelectorAll('.container .grid').forEach(ele => 
        {
            console.log(ele.className);
            ele.firstChild.style.backgroundColor = 'transparent'
        });
    // canvasCreation(gridNumber);
    console.log(document.querySelectorAll('.container .grid'))
})

