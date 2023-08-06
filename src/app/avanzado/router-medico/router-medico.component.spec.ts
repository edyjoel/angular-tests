import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  // Usar of() para crear un obeservable vacio
  // params: Observable<any> = new Observable((observer) => {});

  private subsject = new Subject();

  push(valor: any) {
    this.subsject.next(valor);
  }

  get params() {
    return this.subsject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Debe de redireccionar a Medico cuando se guarde`, () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  // it(`Debe de colocar el id = nuevo`, () => {
  //   component = fixture.componentInstance;
  //   const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);
  //   activatedRoute.push({ id: 'nuevo' });
  //   expect(component.id).toBe('nuevo');
  // });
});
