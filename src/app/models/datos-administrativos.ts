export class DatosAdministrativos {
    constructor(
        public id?: number,
        public anio_construccion?: number,
        public anio_reconstruccion?: string,
        public direccion_absc_carretera?: string,
        public requisitos_inspeccion?: string,
        public numero_secciones_inspeccion?: string,
        public estacion_conteo?: string,
        public recha_recoleccion_datos?: string,
        public iniciales_inspector?: string,
        public puenteid?: number,
    ) { }
}
