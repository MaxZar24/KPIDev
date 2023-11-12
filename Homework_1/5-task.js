function minMax(num_list) {
    const arr = num_list.split(" ")
    let max = Number(arr[0])
    let min = Number(arr[0])
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) > max) {
            max = Number(arr[i])
        } else if (Number(arr[i]) < min) {
            min = Number(arr[i])
        }
    }
    return `${max} ${min}`
}
