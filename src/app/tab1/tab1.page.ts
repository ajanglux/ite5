import { Component, OnInit } from '@angular/core';
import { IonicModules } from 'src/modules/ionic.module';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModules],
})
export class Tab1Page implements OnInit {

  name:string = "Hello";
  movies:string = "sdakjdhak";

  constructor() { console.log("i am in tab1 constructor") }

  ngOnInit(): void {
    console.log("tab1 oninit")
  }
}
