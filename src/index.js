import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./components/store/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
  


ReactDOM.render(
 
    <React.StrictMode> 
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}> 
          <App />
        </DndProvider>
      </Provider>
    </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
