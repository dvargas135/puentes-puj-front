import { Component } from '@angular/core';

import { App } from '../app';
import { Puente } from '../models/puente';
import { Paso } from '../models/paso/paso';
import { Galibo } from '../models/paso/galibo/galibo';
import { DatosAdministrativos } from '../models/datos-administrativos';
import { DatosTecnicos } from '../models/datos-tecnicos';
import { Estribo } from '../models/subestructura/estribo';
import { Pila } from '../models/subestructura/pila';
import { Detalle } from '../models/subestructura/detalle';
import { Senial } from '../models/subestructura/senial';
import { Apoyo } from '../models/apoyo';
import { MiembrosInteresados } from '../models/miembros-interesados';
import { Superestructura } from '../models/superestructura';
import { PosicionGeografica } from '../models/posicion_geografica/posicion-geografica';
import { Carga } from '../models/carga';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  model = new App();
  puente: Puente = new Puente();
  paso: Paso = new Paso();
  galibo: Galibo = new Galibo();
  datos_administrativos: DatosAdministrativos = new DatosAdministrativos();
  datos_tecnicos: DatosTecnicos = new DatosTecnicos();
  estribo: Estribo = new Estribo();
  pila: Pila = new Pila();
  detalle: Detalle = new Detalle();
  senial: Senial = new Senial();
  apoyo: Apoyo = new Apoyo();
  miembros_interesados: MiembrosInteresados = new MiembrosInteresados();
  superestructura: Superestructura = new Superestructura();
  posicion_geografica: PosicionGeografica = new PosicionGeografica();
  carga: Carga = new Carga();

  submitted = false;

  onSubmit() { this.submitted = true; }

  newApp() {
    this.model = new App();
  }

  //skyDog(): App {
  //const myApp = new App(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
  //console.log('My app is called ' + myApp.name);
  //return myApp;
  //}

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(appForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }
}