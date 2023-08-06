import { Component } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent {
  constructor(public _medicoService: MedicoService) {}

  medicos: any[] = [];

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this._medicoService
      .getMedicos()
      .subscribe((medicos: any) => (this.medicos = medicos));
  }
}
