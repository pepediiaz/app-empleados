import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo= "Lista de Empleados";
  
  empleados:Empleado[]=[

  new Empleado("Juan","Díaz","Presidente",7500),
  new Empleado("Pepe","Díaz","Directora",5500),
  new Empleado("Sara","Martín","Encargada",3500),
  new Empleado("Laura","Jimenez","Vicepresidente",2500),

  ];

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);

  }



  borrarEmpleado(): void {
    const empleadoExistente = this.empleados.find(empleado =>
      empleado.nombre === this.cuadroNombre &&
      empleado.apellido === this.cuadroApellido &&
      empleado.cargo === this.cuadroCargo &&
      empleado.salario === this.cuadroSalario
    );

    if (empleadoExistente) {
      const index = this.empleados.indexOf(empleadoExistente);
      this.empleados.splice(index, 1);
    }
  }
  eliminarEmpleado(index: number): void {
    if (index >= 0 && index < this.empleados.length) {
      this.empleados.splice(index, 1);
    }
  }




  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}

