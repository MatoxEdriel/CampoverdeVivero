import { Component } from '@angular/core';
import { IPerson } from '../../../../interfaces/IPerson';
import { personDS } from '../../../../data/person.data';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  //Exporto la data
   
  lstData: IPerson[] = personDS;

  lstPersonUpdate : IPerson[] = [];



  //Se debe recibir el objeto 

  addPersonToUpdate (personUpdate:IPerson){
    this.lstPersonUpdate.push(personUpdate);
    console.log(JSON.stringify(this.lstPersonUpdate));
  }



}
