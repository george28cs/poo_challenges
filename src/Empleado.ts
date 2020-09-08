class Empleado {
    private _nombre: string
    private _edad: number
    private _puesto: string
    private _departamento: string

    //Propiedad estática
    private static _salario:number = 10000

    constructor(nombre: string, edad: number, puesto: string, departamento: string){
        this._nombre = nombre
        this._edad = edad
        this._puesto = puesto
        this._departamento = departamento
    }

    get nombre(){
        return this._nombre
    }
    get edad(){
        return this._edad
    }
    get puesto(){
        return this._puesto
    }
    get departamento(){
        return this._departamento
    }
    
    set nombre(nombre: string){
        this._nombre = nombre
    }
    set edad(edad: number){
        this._edad = edad
    }
    set puesto(puesto: string){
        this._puesto = puesto
    }
    set departamento(departamento: string){
        this._departamento = departamento
    }

    // Obtener salario
    get salario(){
        return Empleado._salario
    }
    // Establecer salario **Esto modifica a toda la clase, por lo que en las siguientes instancias
    // El valor salario será igual a lo establecido con el siguiente método.
    set salario(salario: number){
        Empleado._salario = salario
    }
}

// Tests

const raul = new Empleado('Raul Ramirez', 29, "Logística", "Adminitración")
console.log(raul.salario)
raul.salario = 20000
console.log(raul.salario)