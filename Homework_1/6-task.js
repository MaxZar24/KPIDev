function reverseSort(number) {
    const arr = String(number).split("")
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            let temp = 0
            if ((Number(arr[i])) < Number(arr[i + 1])) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return Number(arr.join(""))
}
