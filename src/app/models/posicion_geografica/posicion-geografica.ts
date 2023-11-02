import { Coordenada } from "./coordenada/coordenada";

export class PosicionGeografica {
    constructor(
        public id?: number,
        public altitud?: number,
        public coeficiente_aceleracion_sismica?: string,
        public paso_cauce?: boolean,
        public existe_variante?: boolean,
        public longitud_variante?: number,
        public estado?: string,
        public puenteid?: number,
        public coordenadas: Coordenada[] = [new Coordenada(), new Coordenada()],
    ) {}
}
