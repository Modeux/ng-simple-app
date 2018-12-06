import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Building} from '../../core/data/buildings';

@Injectable({
    providedIn: 'root'
})
export class ViewRecordService {
    recordArr = [];
    recordDataSource = new BehaviorSubject<Building[]>([]);
    recordData$ = this.recordDataSource.asObservable();

    constructor() {
    }

    saveRecord(data: Building) {
        this.recordArr.concat(this.recordArr.push({...data}));
        this.recordDataSource.next(this.recordArr);
    }
}
