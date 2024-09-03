// input        // result
//cari 3 :
//[8 ,3 ,9 ,2 ,5] // 3

//cari 1 :
//[8 ,3 ,9 ,2 ,5] // false

//cari "h" :
//[8 ,3 ,9 ,2 ,5] // inputan harus number

function linearSearch(arr, target) {

    if (target !== 'number') {
        return "input harus number"
    } 

    for (let i = 0; i < arr.length; i++)
        if (arr[i] === target){
          return i;
        } 
      else{
      return false;
      }     
    }

