import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModules } from 'src/modules/ionic.module';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModules, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
