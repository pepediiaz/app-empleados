import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit{

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;


  eliminarEmpleado(index: number): void {
    if (index >= 0 && index < this.empleadoDeLista.length) {
      this.empleadoDeLista.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}


}
