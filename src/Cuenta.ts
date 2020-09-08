class Cuenta {
    private _nombre: string
    private _numeroCuenta: number
    private _saldo: number
    
    // Constructor por defecto. Por defecto el valor nombre es un string vacío, numeroCuenta es 0 y saldo es 0.
    // Constructor por parámetros, en caso de indicarse los parámetros, se crea la instancia con los parámetros asignados.
    public constructor(nombre: string = "", 
            numeroCuenta: number = 0, 
            saldo: number = 0) {
        this._nombre = nombre
        this._numeroCuenta = numeroCuenta
        this._saldo = saldo
    }
  
    // Constructor copia
    ConstructorCopy(){
        return new Cuenta(this._nombre, this._numeroCuenta, this._saldo)
        //otra forma de hacerlo.
        //return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    public ingreso(){}
    public reintegro(){}
    public transferencia(){}

    get nombre() {
        return this._nombre
    }
    get numeroCuenta() {
        return this._numeroCuenta
    }
    get saldo() {
        return this._saldo
    }
    set nombre(nombre: string) {
        this._nombre = nombre
    }
    set numeroCuenta(numeroCuenta: number) {
        this._numeroCuenta = numeroCuenta
    }
    set saldo(saldo: number) {
        this._saldo = saldo
    }
}

//  Pruebas
const cuentaJorge = new Cuenta("Jorge Carrión", 1, 100)
console.log(cuentaJorge)
cuentaJorge.nombre = "Jorge Manuel Carrión"
console.log(cuentaJorge.ConstructorCopy())

