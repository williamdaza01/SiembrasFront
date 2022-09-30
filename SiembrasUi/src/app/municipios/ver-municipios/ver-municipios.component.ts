import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-municipios',
  templateUrl: './ver-municipios.component.html',
  styleUrls: ['./ver-municipios.component.css']
})
export class VerMunicipiosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  municipiosList:any = [];
  
  ngOnInit(): void {
    this.verMunicipios();
  }

  verMunicipios(){
    this.service.getMunicipiosList().subscribe( data => {
      this.municipiosList = data;
    });
  }
  
  getId(value:string){
    let id;
    id = value;
    return id;
  }
}
