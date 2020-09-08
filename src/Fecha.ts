export default class Fecha {
    private _dia: number
    private _mes: number
    private _anio: number

    constructor(dia: number, mes: number, anio: number){
        this._dia = dia
        this._mes = mes
        this._anio = anio
    }

    set dia(dia: number){
        this._dia = dia
    }
    set mes(mes: number){
        this._mes = mes
    }
    set anio(anio: number){
        this._anio = anio
    }
    get dia(){
        return this._dia
    }
    get mes(){
        return this._mes
    }
    get anio(){
        return this._anio
    }

    public toString(){
        if(this._mes.toString().length == 1) {
            return `${this._dia}-0${this._mes}-${this._anio}`
        }else {
            return `${this._dia}-${this._mes}-${this._anio}`
        }    
    }
    public comprobarFecha(){
        let diaCorrecto: Boolean
        let mesCorrecto: Boolean
        let anioCorrecto: Boolean
        
        anioCorrecto = this.anio > 0
        mesCorrecto = this.mes >= 1 && this.mes <= 12
        switch (this._mes) {
            case 2:
                if (this.comprobarBisiesto()) {
                    diaCorrecto = this._dia >= 1 && this._dia <= 29
                } else {
                    diaCorrecto = this._dia >= 1 && this._dia <= 28
                }
                break
            case 4:
            case 6:
            case 9:
            case 11:
                diaCorrecto = this._dia >= 1 && this._dia <= 30
                break;
            default:
                diaCorrecto = this._dia >= 1 && this._dia <= 31
        }
        return diaCorrecto && mesCorrecto && anioCorrecto
    }
    public siguienteDia(){
        this._dia++;
        if (!this.comprobarFecha()) {
            this._dia = 1;
            this._mes++;
            if (!this.comprobarFecha()) {
                this._mes = 1
                this._anio++
            }
        }
    }
    private comprobarBisiesto(){
        return this._anio % 4 == 0 && this._anio % 100 !=0 || this._anio % 400 == 0
    }
}

// Test 
// Lo comento para usarlo en el ejercicio Persona
// const dia1 = new Fecha(29, 2, 2020)
// console.log(dia1.toString())
// dia1.siguienteDia()
// console.log(dia1.comprobarFecha())
// console.log(dia1)