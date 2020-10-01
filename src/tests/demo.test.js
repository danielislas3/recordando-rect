describe("Pruebas en el archivo demo.test.js", () => {
  test("Los strings deben de ser iguales ", () => {
    //1. Inicialización
    const mensaje = "Hola mundo";

    //2. Estimiulo
    const mensaje2 = "Hola mundo";

    //3.Observar comportamiento
    expect(mensaje).toBe(mensaje2);
  });
  

  
});
