export class Apoyo {
    constructor(
        public id?: number,
        public fijo_sobre_estribo?: string,
        public movil_sobre_estribo?: string,
        public fijo_en_pila?: string,
        public movil_en_pila?: string,
        public fijo_en_viga?: string,
        public movil_en_viga?: string,
        public vehiculo_disenio?: string,
        public clase_distribucion_carga?: string,
        public puenteid?: number,
    ) {}
}
