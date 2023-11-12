class Warrior {
    constructor() {
        this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
        this.Experience = 100
        this.Level = Math.floor(this.Experience / 100)
        this.Rank = this.ranks[Math.floor(this.Level / 10)]
        this.Achievments = []
    }

    level() {
        return this.Level
    }

    rank() {
        return this.Rank
    }

    experience() {
        return this.Experience;
    }

    achievements() {
        return this.Achievments
    }

    training([description, experience, minLvl]) {
        if (this.Level >= minLvl) {
            this.Achievments.push(description)
            this.updating(experience)
            return description
        } else {
            return "Not strong enough"
        }
    }

    battle(enemyLevel) {
        if (enemyLevel > 100 || enemyLevel < 1) {
            return "Invalid level"
        }
        if (this.Level === enemyLevel) {
            this.updating(10);
            return "A good fight"
        } else if (this.Level - enemyLevel === 1) {
            this.updating(5);
            return "A good fight"
        } else if (this.Level - enemyLevel >= 2) {
            return "Easy fight"
        } else if (Math.floor(this.Level / 10) < Math.floor(enemyLevel / 10) && enemyLevel - this.Level >= 5) {
            return "You've been defeated"
        } else if (enemyLevel - this.Level >= 1) {
            this.updating(Math.pow(enemyLevel - this.Level, 2) * 20)
            return "An intense fight"
        }


    }

    updating(experience) {
        this.Experience += experience
        if (this.Experience > 10000) {
            this.Experience = 10000
            this.Level = 100
            this.Rank = this.ranks[Math.floor(this.Level / 10)]
        } else {
            this.Level = Math.floor(this.Experience / 100)
            this.Rank = this.ranks[Math.floor(this.Level / 10)]
        }
    }


}