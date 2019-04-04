import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import TBody from "./TBody/index";
import TCell from "./TCell/index";
import THead from "./THead/index";
import TRow from "./TRow/index";
import "./table.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Table>
        <THead>
          <TRow>
            <TCell>Heading 1</TCell>
            <TCell>Heading2</TCell>
          </TRow>
        </THead>
        <TBody>
          <TRow>
            <TCell>abc</TCell>
            <TCell>abc</TCell>
          </TRow>
          <TRow>
            <TCell>abc</TCell>
            <TCell>abc</TCell>
          </TRow>
        </TBody>
      </Table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
