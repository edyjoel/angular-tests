import { Jugador2 } from './jugador2';

describe('Jugador 2 Emit', () => {
  let jugador: Jugador2;

  beforeEach(() => (jugador = new Jugador2()));

  it('Debe de emitir un evento cuando recibe daño', () => {
    let nuevoHp = 0;

    jugador.hpCambia.subscribe((hp) => {
      nuevoHp = hp;
    });

    jugador.recibeDanio(1000);

    expect(nuevoHp).toBe(0);
  });
});
