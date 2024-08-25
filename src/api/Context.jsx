import { createContext, useState } from "react";

export const MyContext = createContext();
const Context = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <MyContext.Provider value={{ setUsers, users }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
