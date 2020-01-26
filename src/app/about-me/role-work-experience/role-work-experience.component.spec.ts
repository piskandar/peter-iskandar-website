import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleWorkExperienceComponent } from './role-work-experience.component';

describe('RoleWorkExperienceComponent', () => {
  let component: RoleWorkExperienceComponent;
  let fixture: ComponentFixture<RoleWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
