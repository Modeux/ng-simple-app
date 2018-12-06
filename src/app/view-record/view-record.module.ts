import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewRecordRoutingModule} from './view-record-routing.module';
import {ViewRecordComponent} from './view-record.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [ViewRecordComponent],
    imports: [
        SharedModule,
        CommonModule,
        ViewRecordRoutingModule
    ]
})
export class ViewRecordModule {
}
