import React, { createContext, useState } from "react";

//Tipando os dados que quero para usuário
type UserType = {
    name: string,
    nameEmpresa: string,
};

//Tipando as Props do contexto
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    name: '',
    nameEmpresa: ''
  },
  setState: () => {}, //função de inicialização
};

//criando nosso contexto UserContext
const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider };
export default UserContext;