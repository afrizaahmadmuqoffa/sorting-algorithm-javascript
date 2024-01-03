function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_idx = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j
            }

            let temp = arr[i]
            arr[i] = arr[min_idx]
            arr[min_idx] = temp
        }
    }

    return arr
}

let arr = [1, 3, 2, 5, 4]

console.log(selectionSort(arr))