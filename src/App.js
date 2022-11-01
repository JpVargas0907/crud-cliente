import React, { useState } from "react";
import AlterClientScreen from "./components/ClientsListScreen/AlterClientScreen";
import ClientsListScreen from "./components/ClientsListScreen/ClientsListScreen";
import RegisterNewClientScreen from "./components/ClientsListScreen/RegisterNewClientScreen";
import UserContext from "./contexts/UserContext";

function App() {
  const [newClientScreenStatus, setNewClientScreenStatus] = useState(false);
  const [alterScreenStatus, setAlterScreenStatus] = useState(false);
  const [ id, setId ] = useState(0);

  return (
    <UserContext.Provider value={{newClientScreenStatus, setNewClientScreenStatus, alterScreenStatus, setAlterScreenStatus, id, setId}}>
      <RegisterNewClientScreen />
      <ClientsListScreen/>
      <AlterClientScreen />
    </UserContext.Provider>
  );
}

export default App;
