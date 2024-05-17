import { useState , createContext } from "react";

export const MyAdminContext = createContext();


const AdminContext = ({children}) => {
    const [AdminUserName , setAdminUserName] = useState([]); 
  return (
   <MyAdminContext.Provider value={{AdminUserName ,setAdminUserName}} >
    {
    children
   }
   </MyAdminContext.Provider>
  )
}

export default AdminContext