import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const cModule: any = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
];

@NgModule({
    imports: cModule,
    exports: cModule
})
export class CustomaryModule { }