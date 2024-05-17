import { useState, createContext } from "react";
import DashBorad from './DeshBorad';
export const MyAdminContext = createContext();

const AdminContext = ({ children }) => {
  const [AdminUserName, setAdminUserName] = useState([]);
  const [selectedOption, setSelectedOption] = useState(<DashBorad/>);
  return (
    <MyAdminContext.Provider
      value={{
        AdminUserName,
        setAdminUserName,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </MyAdminContext.Provider>
  );
};

export default AdminContext;
