import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {
  let componet: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule],
    });

    fixture = TestBed.createComponent(MedicoComponent);

    componet = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(componet).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {
    const nombre = 'Juan';
    const res = componet.saludarMedico(nombre);

    expect(res).toContain(nombre);
  });
});
