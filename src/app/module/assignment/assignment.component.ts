import { Component ,OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  countries: any;
  search: any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.apiGetCountry();
  }
  
  apiGetCountry(){
    this.httpClient.get<any>('https://restcountries.com/v3.1/all').subscribe(
      response => {
        this.countries = response;
      }
    );
  }
}