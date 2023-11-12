function groupAnagrams(array) {
    let sortedArray = [];
    let indexes = []
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        sortedArray.push(array[i].split('').sort().join(''))
    }
    const unique = Array.from(new Set(sortedArray))
    unique.forEach(word => {
        const indices = [];
        let startIndex = -1;

        while (true) {
            const index = sortedArray.indexOf(word, startIndex + 1);
            if (index === -1) {
                break;
            }
            indices.push(index);
            startIndex = index;
        }
        indexes.push(indices);
    });
    for (let i = 0; i < indexes.length; i++) {
        const anagrams = []
        for (let j = 0; j < indexes[i].length; j++) {
            anagrams.push(array[indexes[i][j]])
        }
        finalArray.push(anagrams)
    }
    return finalArray
}
