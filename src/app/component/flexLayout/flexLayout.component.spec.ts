import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FlexLayOutComponent } from './flexLayout.component';

describe('FlexLayOutComponent', () => {
  let component: FlexLayOutComponent;
  let fixture: ComponentFixture<FlexLayOutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FlexLayOutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
