import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: 'app',
        children: [
            {path: 'buildings', loadChildren: './buildings/buildings.module#BuildingsModule'},
            {path: 'view-record', loadChildren: './view-record/view-record.module#ViewRecordModule'}
        ]
    },
    {path: '', redirectTo: '/app/buildings', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
