import { async, ComponentFixture, TestBed } from '@angular/core/testing';


class KomentComponent {
}

describe('KomentComponent', () => {
  let component: KomentComponent;
  let fixture: ComponentFixture<KomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
