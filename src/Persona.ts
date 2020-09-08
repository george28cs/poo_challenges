import Fecha from './Fecha'
export default class Person {
    private _nombre: string
    private _primerApellido: string
    private _segundoApellido: string
    private _fechaNacimiento: Fecha
        
    constructor(nombre:string, primerApellido: string, segundoApellido: string, fechaNacimiento: Fecha){
        this._nombre = nombre
        this._primerApellido = primerApellido
        this._segundoApellido = segundoApellido
        this._fechaNacimiento = fechaNacimiento
    }

    set fechaNacimiento(fecha: Fecha){
        this._fechaNacimiento = fecha
    }
    get fechaNacimiento(){
        return this._fechaNacimiento
    }
    get nombre() {
        return this._nombre
    }
}

// Tests
const mifechaNacimiento = new Fecha(28, 1, 1990)
const unapersona = new Person('Fito', 'Perez', 'Sanchez', mifechaNacimiento)
// console.log(unapersona) // Lo comenté para exportar el módulo