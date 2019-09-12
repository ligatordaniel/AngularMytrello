import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';//firebase3 || llama servicio

@Component({
  selector: 'app-listaadd',
  templateUrl: './listaadd.component.html',
  styleUrls: ['./listaadd.component.css']
})
export class ListaaddComponent implements OnInit {

  item:any = {                  //firebase3 || atraves del formulario se rellenara
    name:''
  }

  constructor( private servicio:ConexionService) { }

  ngOnInit() {
  }

  agregar(){
    this.servicio.AgregarItem(this.item);
    this.item.name='';
  }

}
