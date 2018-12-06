import {Component, OnInit} from '@angular/core';
import {faBuilding} from '@fortawesome/free-solid-svg-icons/faBuilding';
import {faCity} from '@fortawesome/free-solid-svg-icons/faCity';
import {faChartBar} from '@fortawesome/free-solid-svg-icons/faChartBar';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    faBuilding = faBuilding;
    faCity = faCity;
    faCharBar = faChartBar;

    constructor() {
    }

    ngOnInit() {
    }

}
