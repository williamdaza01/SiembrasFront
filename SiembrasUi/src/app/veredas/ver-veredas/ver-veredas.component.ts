import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-veredas',
  templateUrl: './ver-veredas.component.html',
  styleUrls: ['./ver-veredas.component.css']
})
export class VerVeredasComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  veredasList:any = [];

  ngOnInit(): void {
    this.verVeredas();
  }

  verVeredas(){
    this.service.getVeredasList().subscribe( data => {
      this.veredasList = data;
    })
  }

}
