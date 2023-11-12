function Vector(vector) {
    this.vector = vector;

    this.lengthCheck = function (vector, secondVector) {
        if (this.vector.length !== secondVector.vector.length) {
            throw new Error("Vectors with different lengths");
        }
    }

    this.add = function (secondVector) {
        let result_vector = []
        this.lengthCheck(vector, secondVector)
        for (let i = 0; i < this.vector.length; i++) {
            result_vector.push(this.vector[i] + secondVector.vector[i])
        }
        return new Vector(result_vector)
    }

    this.subtract = function (secondVector) {
        let result_vector = []
        this.lengthCheck(vector, secondVector)
        for (let i = 0; i < this.vector.length; i++) {
            result_vector.push(this.vector[i] - secondVector.vector[i])
        }
        return new Vector(result_vector)
    }

    this.dot = function (secondVector) {
        let result_vector = 0
        this.lengthCheck(vector, secondVector)
        for (let i = 0; i < this.vector.length; i++) {
            result_vector += (this.vector[i] * secondVector.vector[i])
        }
        return result_vector
    }

    this.norm = function () {
        let result_vector = 0
        for (let i = 0; i < vector.length; i++) {
            result_vector += Math.pow(vector[i], 2)
        }
        return Math.sqrt(result_vector)
    }

    this.toString = function () {
        return '(' + vector.join(',') + ')'
    }

    this.equals = function (secondVector) {
        if (this.vector.length !== secondVector.vector.length) {
            return false
        }
        for (let i = 0; i < vector.length; i++) {
            if (this.vector[i] !== secondVector.vector[i]) {
                return false
            }
        }
        return true
    }
}