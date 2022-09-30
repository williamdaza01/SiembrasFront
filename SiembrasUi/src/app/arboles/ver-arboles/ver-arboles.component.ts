import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-arboles',
  templateUrl: './ver-arboles.component.html',
  styleUrls: ['./ver-arboles.component.css']
})
export class VerArbolesComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  arbolesList:any = [];

  ngOnInit(): void {
    this.verArboles();
  }


  verArboles(){
    this.service.getArbolesList().subscribe( data => {
      this.arbolesList = data;
    })
  }

  getId(value:string){
    let id;
    id = value;
    return id;
  }
}
