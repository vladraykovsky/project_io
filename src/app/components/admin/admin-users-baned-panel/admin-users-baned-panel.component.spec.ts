import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersBanedPanelComponent } from './admin-users-baned-panel.component';

describe('AdminUsersBanedPanelComponent', () => {
  let component: AdminUsersBanedPanelComponent;
  let fixture: ComponentFixture<AdminUsersBanedPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersBanedPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersBanedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
