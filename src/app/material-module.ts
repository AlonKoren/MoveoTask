import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  exports: [
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class MaterialModule { }
