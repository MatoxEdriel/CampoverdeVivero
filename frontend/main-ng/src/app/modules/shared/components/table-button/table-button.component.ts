import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IButtonTable } from '../../../../interfaces/button-interface';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styleUrl: './table-button.component.css'
})
export class TableButtonComponent {
  //Como se mostrara al usuario

  @Input()
  tableButtonProperties:IButtonTable = {
    labelUpdate:'update',
    labelDelete:'delete',
    showUpdate:true,
    showDelete:true,
    styleButtonDelete:'danger',
    styleButtonUpdate:'primary',
    styleIconDelete:'trash',
    styleIconUpdate:'refresh'
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










  clickUpdateEvent() {
    this.updateEvent.emit()
  }
  clickDeleteEvent() {
    this.deleteEvent.emit()
  }
}
