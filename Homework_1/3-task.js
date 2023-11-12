function findNb(m) {
    let n = 0;
    let counter = 0;
    while (n < m) {
        n += (counter + 1) ** 3
        counter += 1
    }
    if (n === m) {
        return counter
    } else {
        return -1;
    }
}

