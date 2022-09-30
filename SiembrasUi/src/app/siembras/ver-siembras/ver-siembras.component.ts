import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';
import { VerVeredasComponent } from 'src/app/veredas/ver-veredas/ver-veredas.component';
import { VeredasComponent } from 'src/app/veredas/veredas.component';

@Component({
  selector: 'app-ver-siembras',
  templateUrl: './ver-siembras.component.html',
  styleUrls: ['./ver-siembras.component.css']
})
export class VerSiembrasComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  siembrasList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;
  isShow:boolean = false;
  id:VerVeredasComponent["id"]=0;

  ngOnInit(): void {
    this.verSiembras();
  }

  verSiembras() {
    this.service.getSiembrasList().subscribe( data => {
      this.siembrasList = data;
    })
  }

  addSiembra() {
    this.isShow = true;
    this.sim ={
      codigo: 0,
      codigo_vereda: 0,
      codigo_arbol: 0,
      codigo_contratista: 0,
      fecha:"",
      total_arboles:0,
      total_hectareas:0
    }
    this.Modaltitle="Agregar Siembra";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
    this.verSiembras();
  }

  editSiembra(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Siembra";
    this.ActivateAddEditSiembra = true;
  }

  deleteSiembra(item:any){
    if(confirm("¿Seguro que desea eliminar la siembra?")) {
      this.service.deleteSiembrasList(item.id).subscribe( data => {
        alert(data.toString());
        this.verSiembras();
      })
    }
  }

  ver(){
    console.log(this.id);
    
  }

}
