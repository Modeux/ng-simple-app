import {Component, OnInit, Input} from '@angular/core';
import {faBuilding} from '@fortawesome/free-solid-svg-icons/faBuilding';
import {Observable} from 'rxjs';
import {Building} from '../../core/data/buildings';
import {BuildingsService} from '../shared/buildings.service';

@Component({
    selector: 'app-buildings-group',
    templateUrl: './buildings-group.component.html',
    styleUrls: ['./buildings-group.component.scss']
})
export class BuildingsGroupComponent implements OnInit {

    @Input() buildings: Building[]|Building;
    activeBuildingId: number;

    faBuilding = faBuilding;

    constructor(private buildingsService: BuildingsService) {
    }

    ngOnInit() {
        this.activeBuildingId = this.buildings[0].id;
    }

    selectBuilding(building: Building) {
        this.activeBuildingId = building.id;
        this.buildingsService.getBuildingData(building.id);
    }
}
