import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {

  test("debe retornar Hola + nombre ", () => {

    const nombre = "Pedro";
    const saludo = getSaludo(nombre);

      expect(saludo).toBe('Hola '+nombre)
  });

  test('Debe regresar "Hola Rodrigo si no hay argumento "', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Rodrigo');
  })
});
