const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe("Prueba con promesas", () => {
  test("debe retornar un Heroe assync", (done) => {
    const id = 1;

    const heroe = getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('debe de obtener un error si el heroe no existe', (done) => {
    
    const id=10
   getHeroeByIdAsync(id).then((heore) => {
      
    }).catch((err) => {
      expect(err).toBe('No se pudo encontrar el héroe')
      done()
    });
  })
  
});
