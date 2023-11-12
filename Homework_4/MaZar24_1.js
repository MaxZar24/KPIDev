function VigenèreCipher(key, alphabet) {
    this.key = key;
    this.alphabet = alphabet;
    let index = 0;
    let case_key = key;

    this.encode = function (word) {
        while (word.length > case_key.length) {
            case_key += key[index]
            index += 1;
            if (index === key.length) {
                index = 0
            }
        }
        const slide = []
        let encoded = ""
        for (let i = 0; i < case_key.length; i++) {
            slide.push(alphabet.indexOf(case_key[i]))
        }
        for (let i = 0; i < word.length; i++) {
            if (alphabet.includes(word[i]) === true) {
                encoded += alphabet.charAt(alphabet.indexOf(word[i]) + slide[i])
                if ((alphabet.indexOf(word[i]) + slide[i]) >= alphabet.length) {
                    let temp_index = alphabet.indexOf(word[i]) + slide[i] - alphabet.length
                    encoded += alphabet.charAt(temp_index)
                }
            } else {
                encoded += word[i]
            }
        }
        return encoded;
    };

    this.decode = function (word) {
        while (word.length > case_key.length) {
            case_key += key[index]
            index += 1;
            if (index === key.length) {
                index = 0
            }
        }
        const slide = []
        let decoded = ""
        for (let i = 0; i < case_key.length; i++) {
            slide.push(alphabet.indexOf(case_key[i]))
        }
        for (let i = 0; i < word.length; i++) {
            if (alphabet.includes(word[i]) === true) {
                decoded += alphabet.charAt(alphabet.indexOf(word[i]) - slide[i])
                if ((alphabet.indexOf(word[i]) - slide[i]) < 0) {
                    let temp_index = alphabet.length + (alphabet.indexOf(word[i]) - slide[i])
                    decoded += alphabet.charAt(temp_index)
                }
            } else {
                decoded += word[i]
            }
        }
        return decoded;
    }
}
