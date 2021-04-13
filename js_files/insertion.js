//Implementation of the insertionSort
async function insertionSort(){

    const el = document.querySelectorAll('.bar');
    const n = el.length;

     for(var i = 1; i < n; i++){

        
         let key = el[i].style.height;
         let j = i-1;
         
 
         while(j >= 0 && parseInt(el[j].style.height) > parseInt(key)){
             el[j+1].style.background = 'red';
             el[j].style.background = 'red';
            await waitforme(delay);
            el[j+1].style.height = el[j].style.height;
            el[j+1].style.background = 'green';
            el[j].style.background = 'green';
            j--;
         }
    
         el[j+1].style.height = key;
         el[j+1].style.background = 'green';

       
     }
}

//Event listner attached with the button insertion sort.
const insertionSortBtn = document.querySelector(".insertionSort");
insertionSortBtn.addEventListener('click',async function(){
    disableBubbleSort();
    disableQuickSort();
    disableMergeSort();
    disableSelectionSort();
    disableSlider();
    await insertionSort();
    enableBubbleSort();
    enableQuickSort();
    enableMergeSort();
    enableSelectionSort();
    enableSlider();
});