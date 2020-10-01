import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(user).toEqual(userTest);
  });
  test("debe retornar un objeto con nombre definido", () => {
    const nombre = "Luis";
    
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const usuarioActivo = getUsuarioActivo(nombre);

    expect(usuarioActivo).toEqual(userTest);
  });
});
