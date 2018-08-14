class Bike {
    miles: number;
    constructor(public price: number, public max_speed: string) {
        this.miles = 0;
    }
    displayInfo = () => {
        console.log(`Price: ${this.price}, Speed: ${this.max_speed}, Miles: ${this.miles}`);
        return this;
    }
    ride = () => {
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse = () => {
        console.log("Reversing");
        this.miles -= 5;
        return this;
    }
}
const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(300, "35mph");
const bike3 = new Bike(400, "45mph");
bike1.displayInfo().ride().displayInfo().reverse().displayInfo();
bike2.ride().ride().displayInfo()