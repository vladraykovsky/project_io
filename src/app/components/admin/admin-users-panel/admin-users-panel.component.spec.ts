import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersPanelComponent } from './admin-users-panel.component';

describe('AdminUsersPanelComponent', () => {
  let component: AdminUsersPanelComponent;
  let fixture: ComponentFixture<AdminUsersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
