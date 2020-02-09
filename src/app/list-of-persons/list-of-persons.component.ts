import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-of-persons',
  templateUrl: './list-of-persons.component.html',
  styleUrls: ['./list-of-persons.component.css']
})
export class ListOfPersonsComponent implements OnInit {
  @Input() persons
  @Input() showDetails
  @Output() newPersonSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addNewEvent(person) {
    this.newPersonSelected.emit(person)
  }

}

