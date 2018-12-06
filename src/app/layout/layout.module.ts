import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidenavComponent} from './sidenav/sidenav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ContentComponent} from './content/content.component';
import {LayoutComponent} from './layout.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        SidenavComponent,
        ToolbarComponent,
        ContentComponent,
        LayoutComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        CommonModule
    ],
    exports: [
        SidenavComponent,
        ToolbarComponent,
        ContentComponent,
        LayoutComponent
    ]
})
export class LayoutModule {
}
