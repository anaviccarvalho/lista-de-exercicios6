class Temperatura {
    #celsius;

    constructor(celsius){
        this.#celsius = celsius;

    }

    get celsius(){
        return this.#celsius;
    }
    set celsius(valor){
        this.#celsius = valor;
    }

    get fahrenheit(){
        return (this.#celsius * 9/5) + 32;
    }
    set fahrenheit(valor){
        this.#celsius = (valor - 32) * 5/9;
    }

    get kelvin(){
        return this.#celsius + 273.15;
    }
    set kelvin(valor){
        this.#celsius = valor - 273.15
    }
}

const temp = new Temperatura(30);

console.log(`Celsius: ${temp.celsius} °C`);
console.log(`Fahrenheit: ${temp.fahrenheit} °F`);
console.log(`Kelvin: ${temp.kelvin} K`);

temp.fahrenheit = 90;

console.log("/nApos alterar para 90°F: ");
console.log(`Celsius: ${temp.celsius.toFixed(2)}°C`);
console.log(`Kelvin: ${temp.kelvin.toFixed(2)} K`);