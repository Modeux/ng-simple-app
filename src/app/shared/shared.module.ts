import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
    declarations: [],
    imports: [
        NgxChartsModule,
        FontAwesomeModule,
        CommonModule
    ],
    exports: [
        NgxChartsModule,
        FontAwesomeModule
    ]
})
export class SharedModule {
}
