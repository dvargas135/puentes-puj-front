import { Galibo } from "./galibo/galibo";

export class Paso {
    constructor(
        public id?: number,
        public numero?: number,
        public tipo_paso?: string,
        public primero?: boolean,
        public sup_inf?: string,
        public galibo: Galibo = new Galibo(),
    ) { }
}
