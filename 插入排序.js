const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for(let j=i-1; j >= 0; j--) {
            if(arr[j] > arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}