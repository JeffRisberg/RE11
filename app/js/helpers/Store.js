class Store {
    constructor(records) {
        this.records = records;
    }

    getSize() {
       return (this.records !== undefined ? this.records.length : 0);
    }

    getAll() {
        return this.records;
    }

    getObjectAt(index) {
        if (index < 0 || index >= this.getSize()) {
            return undefined;
        }
        return this.records[index];
    }
}

module.exports = Store;
