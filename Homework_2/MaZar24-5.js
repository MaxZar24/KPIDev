function find_father(object, value) {
    for (let key in object) {
        if (object[key] === value) {
            return key;
        }
        if (typeof object[key] === 'object') {
            const result = find_father(object[key], value);
            if (result !== null) {
                return key;
            }
        }
    }
    return null;
}
