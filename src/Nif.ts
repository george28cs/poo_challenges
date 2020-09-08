class NIF {
    private _dni: number
    private _caracter: string

    constructor(dni: number){
        this._dni =dni
        this._caracter = this.calcularCaracter()
    }

    public calcularCaracter(){
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
        return letras[this._dni % 23]  
    }
}

// Test

const newDNI = new NIF(98765432)
console.log(newDNI.calcularCaracter())