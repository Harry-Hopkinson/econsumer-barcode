// @ts-nocheck
import React from "react";
import "./Barcode.css";
import Html5QrcodePlugin from "../plugins/Scanner";
import ResultContainerPlugin from "../plugins/ResultContainer";

class Barcode extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      decodedResults: [],
    };
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }
  render() {
    return (
      <div className="App">
        <section className="App-section">
          <div className="App-section-title">Econsumer</div>
          <br />
          <br />
          <br />
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={this.onNewScanResult}
          />
          <ResultContainerPlugin results={this.state.decodedResults} />
        </section>
      </div>
    );
  }
  onNewScanResult(decodedResult: any) {
    console.log("App [result]", decodedResult);

    this.setState((state: any): Readonly<{}> => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default Barcode;
