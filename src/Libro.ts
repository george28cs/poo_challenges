class Libro {
   
    private _titulo: string
    private _autor: string
    private _editorial: string
    private _total: number
    private _prestados: number

    //Constructor por defecto, strings vacios '' y numeros = 0.
    public constructor(
            titulo: string = '',
            autor: string = '',
            editorial:string = '',
            total: number = 0,
            prestados: number = 0) {
        this._titulo = titulo,
        this._autor = autor,
        this._editorial = editorial,
        this._total = total,
        this._prestados = prestados
    }

    public prestamo(){
        let prestado: boolean = true
        if (this._prestados < this._total){
            this._prestados = this._prestados + 1
        } else {
            prestado = false
        }
        return prestado
    }
    public devolucion(){
        let devuelto: boolean = true
        if (this._prestados == 0) {
            devuelto = false
        } else {
            this._prestados = this._prestados -1 
        }
        return devuelto
    }

    get titulo() {
        return this._titulo
    }
    get autor() {
        return this._autor
    }get editorial() {
        return this._editorial
    }get total() {
        return this._total
    }get prestados() {
        return this._prestados
    }

    set titulo(titulo: string) {
        this._titulo = titulo
    }
    set autor(autor: string) {
        this._autor = autor
    }set editorial(editorial: string) {
        this._editorial= editorial
    }set total(total: number) {
        this._total = total
    }set prestados(prestados: number) {
        this._prestados = prestados
    }
}

//  Pruebas

const libroMatematicas = new Libro("Matematicas para Ingenieria","Pearson","Grupo Anaya", 10, 0)
console.log(libroMatematicas)
libroMatematicas.editorial = "Grupo Anaya Publicaciones Generales"
console.log(libroMatematicas.editorial)
libroMatematicas.prestamo()
libroMatematicas.prestamo()
libroMatematicas.prestamo()
libroMatematicas.devolucion()
console.log(libroMatematicas)