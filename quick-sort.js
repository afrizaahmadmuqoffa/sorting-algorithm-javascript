//arr [3,1,5,2,4]

//left   = 1,2
//right  = 5,4

//rekursif left

//arr [1,2]
//left  =
//right = 2

//[1,2]

//rekursif right

//arr [5,4]

//left  = 4
//right =

//[4,5]

//return [1,2, 3 ,4,5]
//         ^   ^  ^
//       left  pv right

//COMPLEXITY O(n log n)
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[0]
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [3, 1, 5, 2, 4]

console.log(quickSort(arr))