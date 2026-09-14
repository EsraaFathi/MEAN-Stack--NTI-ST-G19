import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdCard } from './prod-card';

describe('ProdCard', () => {
  let component: ProdCard;
  let fixture: ComponentFixture<ProdCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
