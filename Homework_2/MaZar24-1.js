function council(array, leaders) {
    const personOfGroup = array.length / leaders
    let sumArr = new Array(personOfGroup).fill(0);
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (index < personOfGroup) {
            sumArr[index] += array[i]
            index += 1
        } else {
            index = 0;
            sumArr[index] += array[i]
            index += 1
        }
    }
    return (Math.max(...sumArr))
}


