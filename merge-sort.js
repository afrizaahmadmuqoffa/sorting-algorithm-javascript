//COMPLEXITY O(n log n)

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right]
}

let arr = [2, 1, 3, 5, 4]

console.log(mergeSort(arr))