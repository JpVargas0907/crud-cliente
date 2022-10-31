import AlterClientScreen from "./components/ClientsListScreen/AlterClientScreen";
import ClientsListScreen from "./components/ClientsListScreen/ClientsListScreen";
import RegisterNewClientScreen from "./components/ClientsListScreen/RegisterNewClientScreen";
import UserContext from "./contexts/UserContext";

function App() {
  return (
    <UserContext.Provider>
      <RegisterNewClientScreen />
      <ClientsListScreen/>
      <AlterClientScreen />
    </UserContext.Provider>
  );
}

export default App;
