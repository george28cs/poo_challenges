class Contador {
    private _contador:number
    // Constructor por defecto: contador = 0
    // Constructor por parámetro: contador = parámetro
    public constructor(contador: number = 0) {
        if (contador > 0) {
            this._contador = contador
        } else {
            this._contador = 0
        }
    }
    //Constructor copia
    public contructorCopy(){
        return new Contador(this._contador)
    }

    public counterUp(){
        return this._contador = this._contador + 1
    }
    public counterDown(){
        if(this._contador <= 0) {
            return this._contador = 0
        } else {
            return this._contador = this._contador - 1
        }
    }

    get counter(){
        return this._contador
    }
    set counter(contador: number){
        this._contador = contador
    }
}

//Pruebas
const contador1 = new Contador()
console.log(contador1)
console.log(contador1.counterUp())
console.log(contador1.counterUp())
contador1.counter = 10
console.log(contador1.counterUp())
console.log(contador1.counterUp())
console.log(contador1.counterDown())
console.log(contador1.counterDown())
console.log(contador1.counterDown())
console.log(contador1.counterDown())
console.log(contador1.counterDown())