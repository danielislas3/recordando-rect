import React from "react";
import "@testing-library/jest-dom";
// const { render } = require("@testing-library/react")
import { shallow } from "enzyme";
const { default: PrimerApp } = require("../PrimerApp");

describe("Pruebas en componente PrimeraApp", () => {
  // test('debe de mostrar el mensaje de Hola soy Daniel', () => {

  //   const saludo = 'Hola soy Daniel'

  //   const {getByText}= render(<PrimerApp saludo={saludo} />)

  //   expect(getByText(saludo)).toBeInTheDocument(saludo);
  // })

  test("debe mostror <PrimeraApp> correectamente ", () => {
    const saludo = "Hola soy Daniel";
    const wrapper = shallow(<PrimerApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
});
