import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async-await y fetch', () => {
  test('Debe retornar url con el fig', async () => {
    const url= await getImagen()
    console.log('====================================');
    console.log(url);
    console.log('====================================');
    expect(url.includes('http')).toBe(true)
  })
  
})
