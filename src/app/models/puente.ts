import { Paso } from "./paso/paso";

export class Puente {
    constructor(
        public id?: number,
        public nombre?: string,
        public identif?: string,
        public carretera?: string,
        public pr?: string,
        public regional?: string,
        public observaciones_generales?: string,
        public fecha?: string,
        public tiempo?: string,
        public temperatura?: number,
        public inspector?: string,
        public administrador?: string,
        public anio_proxima_inspeccion?: string,
        public pasos: Paso[] = [new Paso(), new Paso()],
    ) { }
}
