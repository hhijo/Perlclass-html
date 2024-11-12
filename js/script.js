const colorButton :HTMLElement=document.getElementById(elementId: 'colorButton');

colorButton.addEventListener(type: 'click', listener: () :void=>{
    colorButton.style.backgroundColor=colorButton.style.backgroundColor === 'blue'? '#4CAF50':'blue';
    }

);