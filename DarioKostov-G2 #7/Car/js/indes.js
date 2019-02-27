function Car(model, color, year, fuelType, fuelConsumption) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuelType = fuelType;
    this.fuelConsumption = fuelConsumption;
    this.calculation = function (km) {
        
        var result = fuelConsumption * (km / 100);
        return `${this.model}, year ${this.year} ${this.fuelType}, that burns ${fuelConsumption} liters on 100km, for ${km}km will burn ${result} litri. ${this.color} color is not important :). <br>`;
    }
}

let bmw = new Car("bmw 520", "black", "2007", "diesel", 8);
document.write(bmw.calculation(600));

let mazda = new Car("mazda 3", "red", "2005", "diesel", 5.5);
document.write(mazda.calculation(600));

let opel = new Car("opel astra", "blue", "2006", "diesel", 5);
document.write(opel.calculation(600));