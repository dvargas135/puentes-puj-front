export class DatosTecnicos {
    constructor(
        public id?: number,
        public numero_luces?: number,
        public longitud_luz_menor?: number,
        public longitud_luz_mayor?: number,
        public longitud_total?: number,
        public ancho_tablero?: number,
        public ancho_separador?: number,
        public ancho_anden_izq?: number,
        public ancho_anden_der?: number,
        public ancho_calzada?: number,
        public ancho_entre_bordillos?: number,
        public ancho_acceso?: number,
        public altura_pilas?: number,
        public altura_estribos?: number,
        public longitud_apoyo_pilas?: number,
        public longitud_apoyo_estribos?: number,
        public puente_terrapien?: boolean,
        public puente_curva_tangente?: string,
        public esviajamiento?: number,
        public puenteid?: number,
    ) {}
}
