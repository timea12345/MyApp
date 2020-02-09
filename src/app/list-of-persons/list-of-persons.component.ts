import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from "../my-service.service";


@Component({
  selector: 'app-list-of-persons',
  templateUrl: './list-of-persons.component.html',
  styleUrls: ['./list-of-persons.component.css']
})
export class ListOfPersonsComponent implements OnInit {
  // @Input() persons
  // @Input() showDetails
  // @Output() newPersonSelected = new EventEmitter();
  persons = [];
  constructor(private service: MyServiceService) { }

  ngOnInit(): void {
    const setItems = data => (this.persons = data);
    // this.persons.getPersons()
    //   .subscribe(setItems);
    this.service.getPersons().subscribe(setItems);
  }

  // addNewEvent(person) {
  //   this.newPersonSelected.emit(person)
  // }

}

