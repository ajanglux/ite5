import { NgModule } from "@angular/core";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from "src/app/explore-container/explore-container.component";

const var_modules = [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonInput, 
    IonItem,
    ExploreContainerComponent,
]
@NgModule({
    imports: var_modules,
    exports: var_modules,
})
export class IonicModules{}