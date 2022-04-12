import { AppRouter } from "./routers/AppRouter";
import "./app.css";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";

function App() {

  const initialState = useInitialState();

  return (
    <div className="App ">
      <AppContext.Provider value={initialState}>
        <AppRouter />
      </AppContext.Provider>

    </div>
  );
}

export default App;
