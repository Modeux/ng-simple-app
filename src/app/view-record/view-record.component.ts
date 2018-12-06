import {Component, OnInit} from '@angular/core';
import {ViewRecordService} from './shared/view-record.service';
import {Observable} from "rxjs";
import {Building} from "../core/data/buildings";

@Component({
    selector: 'app-view-record',
    templateUrl: './view-record.component.html',
    styleUrls: ['./view-record.component.scss']
})
export class ViewRecordComponent implements OnInit {

    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showXAxisLabel = true;
    xAxisLabel = 'Month';
    showYAxisLabel = true;
    yAxisLabel = 'Visitors';

    colorScheme = {
        domain: ['#5d78ff']
    };

    records$: Observable<Building[]>;

    constructor(private viewRecordService: ViewRecordService) {
    }

    ngOnInit() {
        this.records$ = this.viewRecordService.recordData$;
    }

}
