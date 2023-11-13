import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  public title = 'Servicios';

  public services = [
    { imgPath: '1-service.png', title: 'Repuestos' },
    { imgPath: '2-service.png', title: 'Asesoria' },
    { imgPath: '3-service.png', title: 'Escaner computarizado' }
  ]


}
