import { Component, OnInit, signal } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { StudentDetailsPage } from '../dialogs/student-details/student-details.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], 
  providers: [ModalController]
})
export class Tab2Page implements OnInit {
  protected students: any = [];

  protected selStudents: any = signal(this.students[0]);

  constructor(
    private ds: DataService,
    private modalCtrl: ModalController
  ) {
    console.log("I am in TAB2 Constructor");
    this.getStudents();
  }

  ngOnInit(): void {
    console.log("Tab2 oninit");
    console.log(this.selStudents());
  }

  private getStudents(): void {
    this.ds.request('getstudents', '', null).subscribe((res: any) => {
      this.students = res.data;
      console.log(this.students); 
      console.log("Signal", this.selStudents());
    });
  }

  async onStudentClick(student: any) {
    this.ds.setSelectedStudent(student);

    const modal = await this.modalCtrl.create({
      component: StudentDetailsPage
    });

    await modal.present();
  }
}