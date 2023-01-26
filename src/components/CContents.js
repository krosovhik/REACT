import React, { Component } from "react";
import "./CContents.css";
import jsonData from "../res/text.json";

class CContents extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Witaj użytkowniku. Kliknij przycisk aby poznać wiadomość",
    };
    this.txtData = () => JSON.parse(JSON.stringify(jsonData));
  }

  render() {
    const items = [];
    for (let i = 0; i < this.txtData().count; i++) {
      let value = this.txtData().text[i];
      items.push(
        <div id={"div${i+1}"} className="contentsFlex">
          <img
            className="contentsFlexImg"
            src={"/img/img" + (i + 1) + ".png"}
            alt=""
          />

          <p className="contentsFlexTxt">{value}</p>
        </div>
      );
    }

    return (
      <div className="contentsDivClass">
        {items}
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.changeMsg()}>
          Kliknij, aby poznać tajemnicę
        </button>
      </div>
    );
  }
}

export default CContents;
