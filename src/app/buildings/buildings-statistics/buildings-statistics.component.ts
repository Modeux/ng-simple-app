import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Building} from '../../core/data/buildings';
import {ViewRecordService} from "../../view-record/shared/view-record.service";

@Component({
    selector: 'app-buildings-statistics',
    templateUrl: './buildings-statistics.component.html',
    styleUrls: ['./buildings-statistics.component.scss']
})
export class BuildingsStatisticsComponent implements OnInit {
    @Input() buildingData$: Observable<Building[]|Building>;
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showXAxisLabel = true;
    xAxisLabel = 'Month';
    showYAxisLabel = true;
    yAxisLabel = 'Visitors';
    processing = false;

    colorScheme = {
        domain: ['#5d78ff']
    };

    constructor(
        private viewRecordService: ViewRecordService
    ) {
    }

    ngOnInit() {
    }

    saveData(data: Building) {
        this.processing = true;
        this.viewRecordService.saveRecord(data);
        this.processing = false;
    }

}
