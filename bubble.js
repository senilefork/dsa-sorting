function bubbleSort(arr) {
    for(let i = arr.length - 1; i >= 0; i--){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(swapped === false){
            break;
          }
    }
    return arr
}

module.exports = bubbleSort;