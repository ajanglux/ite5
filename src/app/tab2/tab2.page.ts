import { Component, inject } from '@angular/core';
import { IonicModules } from 'src/modules/ionic.module';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModules]
})
export class Tab2Page {
  // private ds: DataService = inject(DataService);

  constructor(private ds: DataService) { this.getStudents()};

  private getStudents(): void {
    this.ds.request('getstudents', '', null).subscribe((res: any) => {
      console.log(res)
    }); 
  }

}
