import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: './admin.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

     ngOnInit() {
       // tslint:disable-next-line:quotemark
       this.title = "Chao ban" ;     
       
     }
}
