function Ninja(name) {
    var self = this;
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!")
        return this;
    }
    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }
    this.drinkSake = function() {
        this.health += 10;
        return this;
    }
    this.punch = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        }
        return this;
    }
    this.kick = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 15*strength;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + 15*strength + " Health!");
        }
        return this;
    }
}

var naruto = new Ninja("Naruto");
var sasuke = new Ninja("Sasuke");

naruto.kick(naruto);
