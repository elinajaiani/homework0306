function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            document.write("name" + "   " + this.name + "   " + "age" + "   " + this.age + "</br>");
        },
        dirveCar: function(car) {
            document.write(this.name + "   " + "car model" + "   " + car.name + "   " + "released in" + "   " + car.year + "</br>");
        }
    }
};

function createCar(mName, mYear) {
    return {
        name: mName,
        year: mYear
    }
}
var Tom = createUser("Tom", 24);
Tom.displayInfo()

var tesla = createCar("Tesla", 2015);

Tom.dirveCar(tesla);


/// car constructor
function Car(mName, mYear) {
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function() {
        document.write("model" + "   " + this.name + "   " + "released in" + "   " + this.year);
    };
};

// person

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car) {
        document.write(this.name + "   " + "has car" + "   " + car.name)
    };
    this.displayInfo = function() {
        document.write("name" + "   " + this.name + "   " + " age " + "   " + this.age)
    }
}
var tom = new User("Tom", 24);
tom.displayInfo();

var tesla = new Car("Tesla", 2015);

tom.driveCar(tesla);






