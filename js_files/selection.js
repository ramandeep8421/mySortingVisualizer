//Implementation of the selection sort
async function selectionSort(){

    const bars = document.querySelectorAll(".bar");
    const n = bars.length;

    for(var i = 0; i < n; i++){
        
        bars[i].style.background = 'cyan';
        var min_index = i;
        for(var j = i+1; j < n; j++){

             bars[j].style.background = 'red';
             await waitforme(delay);
             if(parseInt(bars[j].style.height) < parseInt(bars[min_index].style.height)){
                
                 if(min_index != i){
                      bars[min_index].style.background = '#0077FF';
                 }
                 min_index = j;
             }
             else{

                bars[j].style.background = '#0077FF';
             }
            
        }
        bars[min_index].style.background = '#0077FF';
        swap(bars[min_index] , bars[i]);
        bars[i].style.background = 'green';


    }
}

//Eventlistner for the selection sort 
const selectionSortBtn = document.querySelector('.selectionSort');
selectionSortBtn.addEventListener('click' , async function(){

   disableBubbleSort();
   disableInsertionSort();
   disableMergeSort();
   disableQuickSort();
   disableSlider();
   await selectionSort();
   enableBubbleSort();
   enableInsertionSort();
   enableMergeSort();
   enableQuickSort();
   enableSlider();

});
