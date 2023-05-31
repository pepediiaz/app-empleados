import {
  Component,
  EventEmitter,
  Host,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Empleado } from '../empleado.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent implements OnInit {
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;
  @Output() empleadoBorrado: EventEmitter<number> = new EventEmitter<number>();

  constructor(@Host() private _app: AppComponent) {}

  eliminarEmpleado(index: number): void {
    // Tambien se puede acceder directamente al componente padre
    // utilizando el decorador Host asignandolo a _app podemos ejecutar sus metodos:
    // this._app.onEmpleadoBorrado(index)

    this.empleadoBorrado.emit(this.indice);
  }

  // Esta es la alternativa mas "fea" pero expone algunas un poco mas de comportamiento nativo
  /*

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    // Obtener el elemento HTML que desencadenó el evento
    const target = event.target as HTMLButtonElement;

    // Verificar si el elemento tiene la clase CSS 'btn-danger'
    if (target.classList.contains('btn-danger')) {
      // Acceder al componente padre
      const appComponent = (this as any)._app as AppComponent;

      // Llamar al método onEmpleadoBorrado() del componente padre con el índice como parámetro
      appComponent.onEmpleadoBorrado(this.indice);
    }
  }
  
  */

  ngOnInit(): void {}
}
