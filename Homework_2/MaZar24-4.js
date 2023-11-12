function sausages(array) {
    const unpacked = [];
    const regex = /\[(.)\1{3}\]/;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j].length === 6 && regex.test(array[i][j]) === true) {
                unpacked.push(array[i][j].split(' ').join(''))
            }
        }
    }
    const toSell = []
    for (let i = 0; i < unpacked.length; i++) {
        if ((i + 1) % 5 !== 0) {
            toSell.push(unpacked[i])
        }
    }
    const final = toSell.join('').replace(/[\[\]]/g, '').split('')
    return (final.join(' '))
}
