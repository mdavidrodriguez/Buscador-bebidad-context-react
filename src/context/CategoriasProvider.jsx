import { useState, useEffect, createContext } from "react";

const CategoriaContext = createContext();

const CategoriasProvider = ({ children }) => {
  return (
    <CategoriaContext.Provider value={{}}>{children}</CategoriaContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriaContext;
