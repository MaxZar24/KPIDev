function place(array) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < array.length; i++) {
        leftSum = 0
        rightSum = 0
        array.slice(0, i).forEach((element) => leftSum += element)
        array.slice(i + 1, array.length).forEach((element) => rightSum += element)
        if (leftSum === rightSum) {
            return i
        }
    }
    if (leftSum !== rightSum) {
        return -1
    }
}
