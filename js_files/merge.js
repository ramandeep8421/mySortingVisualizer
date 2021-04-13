//Implementation of the mergeSort alsorithm
async function merge(bars ,l , m, r){
     
    const n1 = m - l + 1;
    const n2 = r - m;

    //Create temporary arrays
    let L = new Array(n1);
    let R = new Array(n2);

    //Copy the data to temporary arrays
   for(let i = 0; i < n1; i++){
       await waitforme(delay);
       bars[l+i].style.background = 'orange';
       L[i] = bars[l+i].style.height;
   }
        
   
   for(let j = 0; j < n2; j++){
       await waitforme(delay);
       bars[m+1+j].style.background = 'pink';
       R[j] = bars[m+1+j].style.height;
   }
       
  await waitforme(delay);
   //Merge the temporary arrays back into the original array arr

   //Initial index of the subarray
   i = 0;

   //Initial index of the second sbarray
   j = 0;

   //Intial index of the merged subarray
   let k = l;

   while(i < n1 && j < n2){

     await waitforme(delay);
    
  
     if(parseInt(L[i]) <= parseInt(R[j])){

        if(n1 + n1 == bars.length){

           bars[k].style.background = 'green';
        }
        else{
           bars[k].style.background  ='cyan';
        }
       
        bars[k++].style.height = L[i++];
       
     }    
     else{

      if(n1 + n2 == bars.length){
        bars[k].style.background = 'green';
      }
      else{
         bars[k].style.background = 'cyan';
      }
        bars[k++].style.height = R[j++];   
     }
           
   }

   //Copy the remaining elements of L[i] if any

   while(i < n1){

       if(n1+n2 == bars.length){

         bars[k].style.background = 'green';

       }
       else{
           bars[k].style.background = 'cyan';
       }
        bars[k++].style.height = L[i++];
   }

   //Copy the remaining elements of R[i] if any..

   while(j < n2){
       
         if(n1+n2 == bars.length){
             bars[k].style.background = 'green';
         }
         else{
             bars[k].style.background = 'cyan';
         }
        bars[k++].style.height = R[j++];
   }




}

//Mergesort function...
async function mergeSort(bars , l , r){

   if(l >= r){
     return;
   }
   else{

    let mid = l + Math.floor((r-l)/2);
    await mergeSort(bars ,l , mid);
    await mergeSort(bars , mid+1 , r);
    await merge(bars , l , mid , r);
   }

}

//Driver function to call the mergesort for the given array 

async function performMerge(){

    let el = document.querySelectorAll('.bar');

    const l = 0 , r = el.length - 1;

    //perform the merge sort elgorithm
    await mergeSort(el , l , r);
}

const mergeSortBtn = document.querySelector(".mergeSort");
mergeSortBtn.addEventListener('click',async function(){
  disableBubbleSort();
  disableInsertionSort();
  disableQuickSort();
  disableSelectionSort();
  disableSlider();
  await performMerge();
  enableBubbleSort();
  enableInsertionSort();
  enableQuickSort();
  enableSelectionSort();
  enableSlider();

});