class Fraccion {
    private _numerador: number
    private _denominador: number
    private _fraccion: string

    public constructor(numerador: number, denominador: number){
        if (denominador == 0) {
            throw new Error ('No es posible dividir entre 0')
        } else {
            this._numerador = numerador
            this._denominador = denominador
            this._fraccion = `${this._numerador}/${this._denominador}`
        }   
    }
    get fraccion(){
        return this._fraccion
    }

    public sumar(segundaFraccion: Fraccion = new Fraccion(0,0)) {
        let denominador: number = this.mcm(this._denominador, segundaFraccion._denominador)
        let numerador = (this._numerador/this._denominador + segundaFraccion._numerador/segundaFraccion._denominador) * denominador
        let resultadoSuma =this.reducirFraccion(numerador, denominador)
        return resultadoSuma
    }
    public restar(segundaFraccion: Fraccion = new Fraccion(0,0)){
        let denominador: number = this.mcm(this._denominador, segundaFraccion._denominador)
        let numerador = (this._numerador/this._denominador - segundaFraccion._numerador/segundaFraccion._denominador) * denominador
        let resultadoResta = this.reducirFraccion(numerador, denominador)
        return resultadoResta
    }
    public dividir(segundaFraccion: Fraccion = new Fraccion(0,0)){
        let numerador = this._numerador * segundaFraccion._denominador
        let denominador = this._denominador * segundaFraccion._numerador
        let resultadoDivision = this.reducirFraccion(numerador, denominador)
        return resultadoDivision
    }
    public multiplicar(segundaFraccion: Fraccion = new Fraccion(0,0)){
        let numerador = this._numerador * segundaFraccion._numerador
        let denominador = this._denominador * segundaFraccion._denominador
        let resultadoMultiplicacion = this.reducirFraccion(numerador, denominador)
        return resultadoMultiplicacion
    }

    // Calcular Máximo Comun Divisor
    public mcd(a: number, b:number) {
        let iaux; //auxiliar
        a = Math.abs(a); //tomamos valor absoluto
        b = Math.abs(b);
        let i1 = Math.max(a, b); //i1 = el más grande
        let i2 = Math.min(a, b); //i2 = el más pequeño
      
        do {
          iaux = i2; //guardar divisor
          i2 = i1 % i2; //resto pasa a divisor
          i1 = iaux; //divisor pasa a dividendo
        } while (i2 !== 0);
        return i1; //ultimo resto no nulo
    }
    // Calcular Mínimo Común Múltiplo
    public mcm(a: number,  b:number):number {
        let result = ((a / this.mcd(a, b)) * b)
        return result
    }
    // Reducir fracción a mínima expresión, devolviendo un nuevo objeto Fracción.
    public reducirFraccion(numerador: number, denominador: number) {
        let minComunMultiplo = this.mcd(numerador, denominador)
        let fraccionReducida = new Fraccion(numerador/minComunMultiplo, denominador/minComunMultiplo)
        return fraccionReducida
    }
}

// Pruebas

const fraccion1 = new Fraccion(4,2)
const fraccion2= new Fraccion(2,4)
const fraccion3 = fraccion1.sumar(fraccion2)
console.log('Fraccion 3', fraccion3)
const fraccion4 = fraccion3.restar(fraccion2)
console.log('Fracción 4', fraccion4)
const fraccion5 = fraccion1.dividir(fraccion2)
console.log('Fracción 5', fraccion5)
const fraccion6 = fraccion5.multiplicar(fraccion2)
console.log('Fracción 6', fraccion6)
