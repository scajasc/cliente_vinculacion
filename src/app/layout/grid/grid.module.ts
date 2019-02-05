import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule, FormsModule],
    declarations: [GridComponent]
})
export class GridModule {}
