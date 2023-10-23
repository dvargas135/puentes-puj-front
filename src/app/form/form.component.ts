import { Component } from '@angular/core';

import { App } from '../app';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new App();

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