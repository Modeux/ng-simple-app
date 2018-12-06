import {Component, OnInit} from '@angular/core';
import {BuildingsService} from './shared/buildings.service';
import {Building} from '../core/data/buildings';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-buildings',
    templateUrl: './buildings.component.html',
    styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

    buildings$: Observable<Building[] | Building>;
    buildingData$$: Observable<Observable<Building[] | Building>>;

    constructor(private buildingsService: BuildingsService) {
    }

    ngOnInit() {
        this.buildings$ = this.buildingsService.getBuildings()
            .pipe(
                tap(data => {
                    const building: Building = data[0];
                    this.buildingsService.getBuildingData(building.id);
                })
            );
        this.buildingData$$ = this.buildingsService.buildingData$$;
    }

}
