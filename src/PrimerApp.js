import React from "react";
import PropTypes from 'prop-types'

const PrimerApp = ({saludo="Hola mundo"}) => {

  return (
    <>
      <h1> {saludo}</h1>  
    </>
  );
};
PrimerApp.propTypes={
  saludo:PropTypes.string
}

export default PrimerApp;
