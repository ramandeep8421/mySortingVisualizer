//Swap function (since it is common to most algorithms)
function swap(el1, el2) {
   
    
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
  
}

//Functions to disable various buttons when sorting is going on..
//FOr disabling merge sort
function disableMergeSort(){
   let btnMerge = document.querySelector(".mergeSort");
   btnMerge.disabled = true;
}

//For disabling quickSort.
function disableQuickSort(){
  let btnQuick = document.querySelector(".quickSort");
  btnQuick.disabled = true;
}
//For disabling insertion  sort
function disableInsertionSort(){
   let btnInsertion = document.querySelector(".insertionSort");
  btnInsertion.disabled = true;
}
//FOr disabling the bubble sort
function disableBubbleSort(){
    let btnBubble = document.querySelector(".bubbleSort");
    btnBubble.disabled = true;
}
//For disabling selection sort
function disableSelectionSort(){
  let btnSelection = document.querySelector(".selectionSort");
  btnSelection.disabled = true;
}
//For disabling the array size slider
function disableSlider(){
   let btnSlider = document.querySelector("#no_of_bars");
   btnSlider.disabled = true;
}
//Enable SelectionSort
function enableSelectionSort(){
  let btnSelection = document.querySelector(".selectionSort");
  btnSelection.disabled = false;
}
//Enable Bubble sort
function enableBubbleSort(){
   let btnBubble = document.querySelector(".bubbleSort");
   btnBubble.disabled = false;
}
//Enable QuickSort
function enableQuickSort(){
   let btnQuick = document.querySelector(".quickSort");
   btnQuick.disabled = false;
}

//Enable Insertion sort
function enableInsertionSort(){
  let btnInsertion  = document.querySelector(".insertionSort");
  btnInsertion.disabled = false;
}

//Enable Mergesort
function enableMergeSort(){
  let btnMerge = document.querySelector(".mergeSort");
  btnMerge.disabled = false;
}
//Enable array size slider
function enableSlider(){
   let btnSlider = document.querySelector("#no_of_bars");
   btnSlider.disabled = false;
}
//Array storing the heights of the bar
let arr = [];

createNewArray();
//module1: Generate and displays new array bars
function createNewArray(no_of_bars=60){

    deleteBars();
   arr =[];
   
    for(let i = 1; i <= no_of_bars; i++){
        let num = Math.floor(Math.random()*100);
        arr.push(num);
    }

 
  //select the element from the DOM.
  const bars = document.querySelector('#bars');
  bars.classList.add('flex-container');
  
  //create the individual bar and insert each one into it.
  for(var i = 0; i < no_of_bars; i++)
  {
    const bar = document.createElement('div');
    //Now style the element
    bar.style.height = `${arr[i]*5}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    
    bars.appendChild(bar);


  }
}


//Function 
function waitforme(milisec) { 
  return new Promise(resolve => { 
      setTimeout(() => { resolve('') }, milisec); 
  }) 
}
let delay = 260;

//Module2: Eventlistner attached to the createNeArray button to generate new array on click
const arrayGenerateButton = document.getElementById('generateBtn');
arrayGenerateButton.addEventListener('click' , function(){
  createNewArray();
});




//Function to delete the bars so that we can generate new ones 
function deleteBars(){
     
    const bars = document.querySelector('#bars');
    bars.innerHTML = '';
}

//Function to change the number of bars..
let array_size = document.querySelector('#no_of_bars');

//Add event Listener to controll the number of bars..
array_size.addEventListener('input',function(){
   createNewArray(parseInt(parseInt(array_size.value)));
});

//Function to change the speed of the execution of algorithm..
let delay_time = document.querySelector('#speed');

//Add event listner to control the speed
delay_time.addEventListener('input',function(){
   delay = 320 - parseInt(delay_time.value);
});

