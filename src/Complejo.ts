class Complejo{
    private _real: number
    private _imaginario: number
    private _complejo: string
    constructor(real: number, imaginario: number){
        this._real = real
        this._imaginario = imaginario
        if (imaginario < 0){
            this._complejo = `${real}${imaginario}i`
        }else {
            this._complejo = `${real}+${imaginario}i`
        }
    }

    public sumar(complejo: Complejo){
        let real = this._real + complejo._real
        let imaginario = this._imaginario + complejo._imaginario
        return new Complejo(real, imaginario)
    }
    public restar(complejo: Complejo){
        let real = this._real - complejo._real
        let imaginario = this._imaginario - complejo._imaginario
        return new Complejo(real, imaginario)
    }
    public multiplicar(complejo: Complejo){
        let real = (this._real * complejo._real)-(this._imaginario * complejo._imaginario)
        let imaginario = (this._real * complejo._imaginario) + (this._imaginario * complejo._real)
        return new Complejo(real, imaginario)
    }
    public dividir(complejo: Complejo){
        let real = ((this._real * complejo._real) + (this._imaginario * complejo._imaginario)) / 
                   ((complejo._real * complejo._real)+ (complejo._imaginario * complejo._imaginario))
        let imaginario = ((this._imaginario * complejo._real)-(this._real * complejo._imaginario)) /
                    ((this._real * complejo._real) + (complejo._imaginario * complejo._imaginario))
        return new Complejo(real, imaginario)
    }
}

const complejo1 = new Complejo(1, 1)
const complejo2 = new Complejo(2, 2)
const complejo3 = complejo1.sumar(complejo2)
const complejo4 = complejo1.restar(complejo2)
const complejo5 = complejo1.dividir(complejo2)
const complejo6 = complejo1.multiplicar(complejo2)
console.log('Complejo3: ', complejo3)
console.log('Complejo4: ', complejo4)
console.log('Complejo5: ', complejo5)
console.log('Complejo6: ', complejo6)

