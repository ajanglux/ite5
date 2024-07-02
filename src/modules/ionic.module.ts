import { NgModule } from "@angular/core";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from "src/app/explore-container/explore-container.component";

const var_modules = [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonInput, 
    IonItem,
    IonList,
    IonLabel,
    ExploreContainerComponent,
]
@NgModule({
    imports: var_modules,
    exports: var_modules,
})
export class IonicModules{}