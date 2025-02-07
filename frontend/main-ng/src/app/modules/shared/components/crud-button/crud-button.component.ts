import { Component, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { IButtonCrud } from '../../../../interfaces/button-interface';
import { IDevice } from '../../../../interfaces/IDevice';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styles: ``
})
export class CrudButtonComponent implements AfterViewInit {


  @Input()
  dataDevice:IDevice = {
    id: 0,
    name:'',
    brand: '',
    model: '',
    release_date: '',  
    os: '',
    screen_size:'',  
    ram: '',
    storage:'',  
    price: 0
  }

  //Aqui haremos variables donde se guardaran los datos que se usaran para crear 
  //el objeto 
  nameLocal :string = '';
  brandLocal :string = '';
  modelLocal: string='';
  releaseDateLocal : string='';




  ngAfterViewInit(): void {
      this.nameLocal = this.dataDevice.name;
      this.brandLocal = this.dataDevice.brand;
      this.modelLocal = this.dataDevice.model;
      this.releaseDateLocal = this.dataDevice.release_date;
  }

  

  @Input()
  crudButtonProperies: IButtonCrud = {
    labelCreate: "",
    labelRead: "",
    labelUpdate: "",
    labelDelete: "",
    styleButtonCreate: "success",
    styleButtonRead: "primary",
    styleButtonUpdate: "warning",
    styleButtonDelete: "danger",
    styleIconCreate: "list",
    styleIconRead: "filter",
    styleIconUpdate: "refresh",
    styleIconDelete: "trash",
    showCreate: true,
    showUpdate: true,
    showDelete: true,
    showRead: true
  }

  //!Estos on los eventos que se usa para
  //!comunicar al html 
  @Output() createEvent = new EventEmitter();

  @Output() readEvent = new EventEmitter();

  @Output() updateEvent = new EventEmitter();

  @Output() deleteEvent = new EventEmitter();


  //!Aqui crearemos los mismo metodos pero con el click

  clickCreateEvent() {
    this.createEvent.emit()
  }

  clickReadEvent() {
    this.readEvent.emit()
  }

  clickUpdateEvent() {
    this.updateEvent.emit()
  }

  clickDeleteEvent() {
    this.deleteEvent.emit()
  }





}
