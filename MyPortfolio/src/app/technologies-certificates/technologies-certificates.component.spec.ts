import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesCertificatesComponent } from './technologies-certificates.component';

describe('TechnologiesCertificatesComponent', () => {
  let component: TechnologiesCertificatesComponent;
  let fixture: ComponentFixture<TechnologiesCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
