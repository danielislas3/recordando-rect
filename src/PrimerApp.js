import React from "react";
import PropTypes from 'prop-types'

const PrimerApp = ({saludo="Hola mundo",subtitulo}) => {

  return (
    <>
      <h1> {saludo}</h1>  
      
      <p> {subtitulo}</p>  
    </>
  );
};
PrimerApp.propTypes={
  saludo:PropTypes.string.isRequired,
  
}
PrimerApp.defaultProps={
  subtitulo:'Soy un subtitulo'
}

export default PrimerApp;
