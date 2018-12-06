import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsGroupComponent } from './buildings-group.component';

describe('BuildingsGroupComponent', () => {
  let component: BuildingsGroupComponent;
  let fixture: ComponentFixture<BuildingsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
