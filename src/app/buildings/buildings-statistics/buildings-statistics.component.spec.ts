import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsStatisticsComponent } from './buildings-statistics.component';

describe('BuildingsStatisticsComponent', () => {
  let component: BuildingsStatisticsComponent;
  let fixture: ComponentFixture<BuildingsStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingsStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
