import {Injectable} from '@angular/core';
import {Building, BuildingsApi} from '../data/buildings';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() {
    }

    public get(uri: string): Observable<Building[]|Building> {
        if (uri === '/api/buildings') {
            const building = new BuildingsApi();
            const data = building.getBuildings();
            return of(data);
        } else {
            const target = parseInt(uri.slice(-1)[0], 10);
            const building = new BuildingsApi(target);
            const data = building.getBuildingsVisitor();
            return of(data);
        }
    }
}
