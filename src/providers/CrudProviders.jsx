import React, { createContext, useState } from 'react';

export const EditableContext = createContext();

export const EditableProvider = ({ children }) => {
 const [idLigneEditable, setIdLigneEditable] = useState(null);

 const activerEdition = (id) => {
    setIdLigneEditable(id);
 };

 const desactiverEdition = () => {
    setIdLigneEditable(null);
 };

 return (
    <EditableContext.Provider value={{ idLigneEditable, activerEdition, desactiverEdition }}>
      {children}
    </EditableContext.Provider>
 );
};
