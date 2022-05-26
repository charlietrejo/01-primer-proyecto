import { HeroeComponent } from "./heroe/heroe.component";
import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class AppModule { }