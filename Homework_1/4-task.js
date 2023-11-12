function is_prime(num) {
    let counter = 0;
    if (num > 1) {
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                counter += 1
            }
        }
        return counter === 2;
    } else {
        return false
    }
}

