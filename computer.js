class Computer {
    constructor(brand, OS, type) {
        this.brand = brand;
        this.OS = OS;
        this.type = type;
    }

    powerOn() {
        console.log(`${this.brand} ${this.type} powers on with ${this.OS}.`);
    }

    static powerOnAll(computers) {
        computers.forEach(computer => computer.powerOn());
    }
}

const computer1 = new Computer('Apple', 'macOS', 'Laptop');
const computer2 = new Computer('Dell', 'Windows 10', 'Desktop');

computer1.powerOn();
computer2.powerOn();

Computer.powerOnAll([computer1, computer2]);

module.exports = Computer; 