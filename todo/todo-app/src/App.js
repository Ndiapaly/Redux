import React from "react";
import { Provider } from "react-redux";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import { store } from "./store";
import "./styles.css"; // Importer le fichier CSS

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
