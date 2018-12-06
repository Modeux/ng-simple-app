import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Building} from '../../core/data/buildings';

@Injectable({
    providedIn: 'root'
})
export class BuildingsService {

    buildingDataSource = new BehaviorSubject<Observable<Building[]|Building>>(null);
    buildingData$$ = this.buildingDataSource.asObservable();

    constructor(private apiService: ApiService) {
    }

    public getBuildings(): Observable<Building[]|Building> {
        const uri = '/api/buildings';
        return this.apiService.get(uri);
    }

    public getBuildingData(id: number) {
        const uri = `/api/buildings/${id}`;
        const data$ = this.apiService.get(uri);
        this.buildingDataSource.next(data$);
    }
}
