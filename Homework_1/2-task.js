function tower_hanoi(disks) {
    let n = 1;
    for (let i = 1; i < disks; i++) {
        n = 2 * n + 1
    }
    return n;
}
