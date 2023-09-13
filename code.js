function insertionSortReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) { // Start at the end of the array
        var val = arr[i];
        var j;
        for(j = i; j < arr.length - 1 && arr[j+1] < val; j++) { // Start at the end of the array and instead of checking if greater check if less and move accordingly
          arr[j] = arr[j+1]; // Swap the element +1 not -1
        }
        arr[j] = val; // This doesnt change
      }
      return arr;
}

//normal way insertion sort
//I have it here for easy reference
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
      var val = arr[i];
      var j;
      for(j = i; j > 0 && arr[j-1] > val; j--) {
        arr[j] = arr[j-1];
      }
      arr[j] = val;
    }
    return arr;
  }
