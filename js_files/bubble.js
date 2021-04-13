


//Implemetation of the bubble sort algorithm

async function bubbleSort(){

   const bars = document.querySelectorAll('.bar');
  
    const n = bars.length;
    
    for(var i = 0; i < n-1; i++){
      

         for(var j = 0; j < n-i-1; j++){
             
             bars[j].style.background = 'red';
             bars[j+1].style.background = 'red';

             if(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)){
                 
                await waitforme(delay);
               swap(bars[j] , bars[j+1]);
              
             }
   
              
             bars[j].style.background = '#0077FF';
             bars[j+1].style.background = '#0077FF';
            }

            
            bars[n-i-1].style.background = 'green';
         }

        
        bars[0].style.background = 'green';
   
}


//Event listener for the bubble sort
const bubSortbutton = document.querySelector(".bubbleSort");
bubSortbutton.addEventListener('click', async function(){
   disableSelectionSort();
   disableInsertionSort();
   disableMergeSort();
   disableQuickSort();
   disableSlider();
   await bubbleSort();
   enableSelectionSort();
   enableInsertionSort();
   enableMergeSort();
   enableQuickSort();
   enableSlider();
});