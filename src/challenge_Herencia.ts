import Fecha from './Fecha'
import Persona from './Persona'

class Empleado extends Persona {
    private _correo: string

    constructor(correo: string, nombre: string, primerApellido: string, segundoApellido: string, fechaNacimiento: Fecha){
        super(nombre, primerApellido, segundoApellido,fechaNacimiento)
        this._correo = correo
    }

    get cargo(){
        let cargo: string = "Empleado"
        return `${cargo}: ${this.nombre}`
    }
    
}

class Academico extends Empleado {
    private _id: number
    private _facultad: string
    constructor(id: number, nombre: string, primerApellido: string, segundoApellido: string, facultad:string = 'Ninguna', 
            correo: string, fechaNacimiento: Fecha) {
        super(correo, nombre, primerApellido, segundoApellido,fechaNacimiento)
        this._id = id
        this._facultad = facultad
    }
    get cargo(){
        let cargo: string = "Académico"
        return `${cargo}: ${this.nombre}`
    }
}

class Decano extends Academico {
    private _escuela: string
    
    constructor(escuela: string, id: number, nombre:string, primerApellido: string, segundoApellido: string, facultad:string,
        correo: string, fechaNacimiento: Fecha) {
        super(id, nombre, primerApellido, segundoApellido, facultad, correo, fechaNacimiento )
        this._escuela = escuela
    }
    get cargo(){
        let cargo: string = "Decano"
        return `${cargo}: ${this.nombre}`
    }
}

// Tests

const fechaNac = new Fecha(21, 3, 1997)
const fechaNac2 = new Fecha(2, 4, 1990)
const persona1 = new Persona("Pedro", "Perez", "Perez", fechaNac)
console.log(persona1)

const empleado1 = new Empleado("a@email.com", "Patty", "Perez", "Perez", fechaNac2)
console.log(empleado1.cargo)


const academico1 = new Academico(1, "Pedrito", "Lopez", "Portillo","ingenieria", "micorreo@domain.com", fechaNac2)
console.log(academico1, academico1.cargo)

const decano1 = new Decano("UV", 23, "Jose", "Alfredo", "Jimenez", "Ninguna", "decano@uv.mx", fechaNac)
console.log(decano1, ' '+ decano1.cargo)