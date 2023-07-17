describe('Pruebas de arreglos', () => {
  it('Debe de retornar al menos 3 robots', () => {
    var resp = ['MegaMan', 'Jarvis', 'Robocop', 'Ultron'];
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe de existir MegaMan y Ultron', () => {
    var resp = ['MegaMan', 'Jarvis', 'Robocop', 'Ultron'];
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });
});
