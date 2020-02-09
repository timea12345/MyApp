import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  person ={};
  constructor(private service: MyServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.service.getPersonById(id).subscribe(data => (this.person = data));
  }

}
