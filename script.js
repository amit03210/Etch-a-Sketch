//Variables
let canvasSize = 250;

//Create Element
let resetButton = document.createElement('button');

//Element Select
let body = document.querySelector('body');
let containers = document.querySelector('.container');


//Styling Element
body.setAttribute('style', 'display: flex; justify-content: center; align-items: center;');
containers.setAttribute("style", `background-color: orange; height: ${canvasSize}px; width: ${canvasSize}px;
    display: flex; flex-direction: row; flex-wrap: wrap;`);
    resetButton.textContent = "Reset";
    
    // //Appnd
body.appendChild(resetButton);

    


function canvasCreation(gridNum) {

    for(i=0; i<gridNum*gridNum; i++){
        // containers.remove()
        let gridbox = document.createElement('div');
        let innerGrid = document.createElement('div');
        
        containers.appendChild(gridbox);
        gridbox.appendChild(innerGrid);

        gridbox.setAttribute('class', 'grid');
        gridbox.setAttribute('style', `height: ${(canvasSize/gridNum)}px; width: ${(canvasSize/gridNum)}px;`)
        // innerGrid.style.border = '1px solid grey';
        innerGrid.setAttribute('style', `border: 1px solid grey; height: ${(canvasSize/gridNum)-1}px; width:${(canvasSize/gridNum)-1}px;`)

        console.log(canvasSize/(gridNum*2));
        console.log(gridbox);
    }

    // let gridList = document.querySelector('grid');
    // gridList.foreach((minions) => {
    //     containers.appendChild(minions);
    // })
}

canvasCreation(16);