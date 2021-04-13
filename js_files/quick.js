//Partition function.
async function partition(bars,low ,high){

  //get the bars
 
   let pivot = high; // pivot
  bars[pivot].style.background = 'red';
   let i = (low-1);

   for(var j = low; j <= high-1; j++){
       await waitforme(delay);
        bars[j].style.background = 'yellow';
        if(parseInt(bars[j].style.height) < parseInt(bars[pivot].style.height)){
            i++;
            bars[i].style.background = 'cyan';
            if(i != j)bars[j].style.background = 'cyan';
            swap(bars[i] , bars[j]);
            await waitforme(delay);
            bars[i].style.background = '#0077FF';
            bars[j].style.background = '#0077FF';
        }
        else{
            bars[j].style.background = 'orange';
        }
   }
   i++;
   swap(bars[i] , bars[pivot]);
   bars[i].style.background = 'green'; // pivot new position
   bars[high].style.background = 'orange'; // pivot old position.=> this is at its right position..

   for(var k = 0; k < bars.length; k++){
        if(bars[k].style.background != 'green'){
             bars[k].style.background= '#0077FF';
        }
   }

   return i;

}

//QuickSort function
async function quickSort(bars,low , high){
    if(low < high){
        let pi = await partition(bars,low , high);

        quickSort(bars,low , pi-1);
        quickSort(bars,pi+1 , high);
    }
    else{
        if(low >= 0 && high >= 0 && low < bars.length && high < bars.length){
            bars[low].style.background = 'green';
            bars[high].style.background = 'green';
        }
      
    }
} 

//Event listner 
const quickSortBtn = document.querySelector(".quickSort");
quickSortBtn.addEventListener('click',async function(){
    

      disableBubbleSort();
      disableInsertionSort();
      disableMergeSort();
      disableSelectionSort();
      disableSlider();
      let bars = document.querySelectorAll(".bar");
      let low =0;
      let high = bars.length-1;
      await quickSort(bars,low, high);
      enableBubbleSort();
      enableInsertionSort();
      enableMergeSort();
      enableSelectionSort();
      enableSlider();
});
