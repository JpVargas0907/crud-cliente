import { useState } from "react";
import AlterClientScreen from "./components/ClientsListScreen/AlterClientScreen";
import ClientsListScreen from "./components/ClientsListScreen/ClientsListScreen";
import RegisterNewClientScreen from "./components/ClientsListScreen/RegisterNewClientScreen";
import UserContext from "./contexts/UserContext";

function App() {
  const [newClientScreenStatus, setNewClientScreenStatus] = useState(false);
  const [alterScreenStatus, setAlterScreenStatus] = useState(false);

  return (
    <UserContext.Provider value={{newClientScreenStatus, setNewClientScreenStatus, alterScreenStatus, setAlterScreenStatus}}>
      <RegisterNewClientScreen />
      <ClientsListScreen/>
      <AlterClientScreen />
    </UserContext.Provider>
  );
}

export default App;
