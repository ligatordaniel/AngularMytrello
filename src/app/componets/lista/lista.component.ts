import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';//importa servicio firestore 2

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

/*importa servicio firestore 2*/
  items:any;  // variable vacia que ...

  /*//firebase5  */
  editarItem:any= {         //variable funcion editar editar 
    name: ''     
  }/*firebase5 */

  constructor(private conexion:ConexionService) { 
    this.conexion.listaItem().subscribe(item=>{
      this.items = item;   // sera consumida y llenada con los items que vienen de nuestro servicio
      console.log(this.items)
    })
  
  }       


  ngOnInit() {
  }

  /*firebase4*/
  eliminar(item){         //como funcionara eliminar boton
    this.conexion.eliminarItem(item);
  }
  /*firebase4*/

    /*firebase5*/
  editar(item){
    this.editarItem = item;
  }
  agregarItemEditado(){
    this.conexion.EditarItem(this.editarItem);     // NOTA:siempre usar this con var u objetos que estan dentro de la clase
  }  
    /*firebase5*/

  
}
 /*importa servicio firestore 2*/