import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-siembras',
  templateUrl: './ver-siembras.component.html',
  styleUrls: ['./ver-siembras.component.css']
})
export class VerSiembrasComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  siembrasList:any = [];

  ngOnInit(): void {
    this.verSiembras();
  }

  verSiembras() {
    this.service.getSiembrasList().subscribe( data => {
      this.siembrasList = data;
    })
  }

}
