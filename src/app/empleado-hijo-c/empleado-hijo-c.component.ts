import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent implements OnInit {
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;
  @Output() empleadoBorrado: EventEmitter<number> = new EventEmitter<number>();

  eliminarEmpleado(index: number): void {
    this.empleadoBorrado.emit(this.indice);
  }

  constructor() {}

  ngOnInit(): void {}
}
