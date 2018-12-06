import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BuildingsRoutingModule} from './buildings-routing.module';
import {BuildingsComponent} from './buildings.component';
import {BuildingsGroupComponent} from './buildings-group/buildings-group.component';
import {SharedModule} from '../shared/shared.module';
import {BuildingsStatisticsComponent} from './buildings-statistics/buildings-statistics.component';

@NgModule({
    declarations: [
        BuildingsComponent,
        BuildingsGroupComponent,
        BuildingsStatisticsComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        BuildingsRoutingModule
    ]
})
export class BuildingsModule {
}
