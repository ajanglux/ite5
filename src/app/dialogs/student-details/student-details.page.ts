import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CustomaryModule } from 'src/modules/customary.module';
import { IonicModules } from 'src/modules/ionic.module';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
  standalone: true,
  imports: [
    CustomaryModule,
    IonicModules
  ],
})
export class StudentDetailsPage implements OnInit {
  protected fgDetails!: FormGroup;

  constructor(
    private ds: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.ds.getSelectedStudent().subscribe(student => {
      if (student) {
        this.fgDetails.patchValue({
          fld_fname: student.fld_fname,
          fld_mname: student.fld_mname,
          fld_lname: student.fld_lname,
          fld_extname: student.fld_extname,
          fld_age: student.fld_age,
        });
      }
    });
  }

  private initForm() {
    this.fgDetails = this.fb.group({
      fld_fname: [null, Validators.required],
      fld_mname: [null, Validators.required],
      fld_lname: [null, Validators.required],
      fld_extname: [null],
      fld_age: [null, [Validators.required, Validators.min(1)]],
    });
  }

  protected onSubmit() {
    console.log('Submit clicked');
  }
  
  protected onCancel(): void {
    console.log('Cancel clicked');
  }
}