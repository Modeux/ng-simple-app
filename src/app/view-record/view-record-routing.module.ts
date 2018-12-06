import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewRecordComponent} from './view-record.component';

const routes: Routes = [
    {path: '', component: ViewRecordComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewRecordRoutingModule {
}
