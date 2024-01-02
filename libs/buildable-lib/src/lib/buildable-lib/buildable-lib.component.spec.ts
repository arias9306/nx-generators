import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildableLibComponent } from './buildable-lib.component';

describe('BuildableLibComponent', () => {
  let component: BuildableLibComponent;
  let fixture: ComponentFixture<BuildableLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildableLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
