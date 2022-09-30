import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-editar-siembras',
  templateUrl: './editar-siembras.component.html',
  styleUrls: ['./editar-siembras.component.css']
})
export class EditarSiembrasComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  @Input() sim:any;
  codigo:number = 0;
  codigo_vereda:number=0;
  codigo_arbol:number=0;
  codigo_contratista:number=0;
  fecha:string = "";
  total_arboles:number = 0;
  total_hectareas:number = 0;

  ngOnInit(): void {
    this.codigo = this.sim.codigo;
    this.codigo_vereda = this.sim.codigo_vereda;
    this.codigo_arbol = this.sim.codigo_arbol;
    this.codigo_contratista = this.sim.codigo_contratista;
    this.fecha = this.sim.fecha;
    this.total_arboles = this.sim.total_arboles;
    this.total_hectareas = this.sim.total_hectareas;
  }

  addSiembra(){
    const val ={
      codigo:this.codigo,
      codigo_vereda:this.codigo_vereda,
      codigo_arbol:this.codigo_arbol,
      codigo_contratista:this.codigo_contratista,
      fecha:this.fecha,
      total_arboles:this.total_arboles,
      total_hectareas:this.total_hectareas
    };
    this.service.postSiembrasList(val).subscribe( res => {
      alert(res.toString());
    });
  }

  updateSiembra(){
    const val ={
      codigo:this.codigo,
      codigo_vereda:this.codigo_vereda,
      codigo_arbol:this.codigo_arbol,
      codigo_contratista:this.codigo_contratista,
      fecha:this.fecha,
      total_arboles:this.total_arboles,
      total_hectareas:this.total_hectareas
    };
    this.service.putSiembrasList(val).subscribe( res => {
      alert(res.toString());
    });
  }

}
