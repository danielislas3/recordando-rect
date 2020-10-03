import React from 'react'
const { render } = require("@testing-library/react")
const { default: PrimerApp } = require("../PrimerApp")

describe('Pruebas en componente PrimeraApp', () => {
  test('debe de mostrar el mensaje de Hola soy Daniel', () => {
    
    const saludo = 'Hola soy Daniel'

    const {getByText}= render(<PrimerApp saludo={saludo} />)

    
    expect(getByText(saludo)).toBeInTheDocument(saludo);
  })
  
})
