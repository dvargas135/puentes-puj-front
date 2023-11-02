export class Carga {
    constructor(
        public id?: number,
        public longitud_luz_critica?: number,
        public factor_clasificacion?: string,
        public fuerza_cortante?: string,
        public momento?: string,
        public linea_carga_por_rueda?: string,
        public observaciones?: string,
        public puenteid?: number,
    ) {}
}
