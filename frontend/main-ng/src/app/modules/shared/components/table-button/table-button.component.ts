import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IButtonTable } from '../../../../interfaces/button-interface';
import { IPerson } from '../../../../interfaces/IPerson';
import { personDS } from '../../../../data/person.data';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styleUrl: './table-button.component.css'
})
export class TableButtonComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.firstNameLocal = this.dataPerson.firstname;
    this.lastNameLocal = this.dataPerson.lastname;
    this.phoneLocal = this.dataPerson.phone;
  }




  //haremos que los datos nuevos se conserven para su confirmacion para eso se crea variables para eso

  firstNameLocal: string = '';
  lastNameLocal: string = '';
  phoneLocal: string = '';


  //Como esta funcion lo que hace es que lanzara una funcion en su inicio de de componente 
  //con esto se cargaria los datos CUANDO 
  //!el componente se active 

  //Usado si es para API  debido que cargara despues de activarse el componente 

  //Com

  @Input()
  dataPerson: IPerson = {
    id: 0,
    firstname: '',
    lastname: '',
    fecha_nacimiento: '',
    genre: '',
    phone: '',
    ciudad: '',
    nivel_estudios: ''
  }


 







  @Input()
  tableButtonProperties: IButtonTable = {
    labelUpdate: 'update',
    labelDelete: 'delete',
    showUpdate: true,
    showDelete: true,
    styleButtonDelete: 'danger',
    styleButtonUpdate: 'primary',
    styleIconDelete: 'trash',
    styleIconUpdate: 'refresh'
  }


  // @Input()
  // labelUpdate: string = 'Update';

  // @Input()
  // labelDelete: string = 'Delete';

  // //Accion de mostrarse
  // @Input()
  // showUpdate: boolean = true;

  // @Input()
  // showDelete: boolean = true;


  // //Estilos
  // @Input()
  // styleButtonUpdate: string = 'primary';


  // @Input()
  // styleButtonDelete: string = 'danger';

  // //Iconons
  // @Input()
  // styleIconRefresh: string ='refresh';

  // @Input()
  // styleIconDelete: string = 'trash';


  //EVENTO
  @Output() updateEvent = new EventEmitter();

  @Output() deleteEvent = new EventEmitter();


  @Output() saveEvent = new EventEmitter();










  clickUpdateEvent() {


    this.updateEvent.emit()
  }
  clickDeleteEvent() {
    this.deleteEvent.emit()
  }


  clickSaveEvent() {
    let personUpdate: IPerson = {
      firstname: this.firstNameLocal,
      lastname: this.lastNameLocal,
      phone: this.phoneLocal,
      ciudad: this.dataPerson.ciudad,
      fecha_nacimiento: this.dataPerson.fecha_nacimiento,
      genre: this.dataPerson.genre,
      nivel_estudios: this.dataPerson.nivel_estudios,
      id: this.dataPerson.id
      //esto se establece el objeto que se mandara a guardar 
    }
    //!Se enviaria los datos es decir el nuevo objeto se lo enviaria 
    this.saveEvent.emit(personUpdate)
    console.log(JSON.stringify(personUpdate));

  }
}
