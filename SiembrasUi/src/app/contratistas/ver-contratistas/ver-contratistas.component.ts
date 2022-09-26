import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-contratistas',
  templateUrl: './ver-contratistas.component.html',
  styleUrls: ['./ver-contratistas.component.css']
})
export class VerContratistasComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  contratistasList:any = [];

  ngOnInit(): void {
    this.verContratistas();
  }

  verContratistas(){
    this.service.getContratistasList().subscribe( data => {
      this.contratistasList = data;
    })
  }

}
