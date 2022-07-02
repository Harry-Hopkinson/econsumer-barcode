import React from "react";
import { filterResults } from "./FilterResult";

class ResultContainerTable extends React.Component {
  render() {
    // @ts-ignore
    var results = filterResults({ results: this.props.data });
    return (
      <table className={"Qrcode-result-table"}>
        <thead>
          <tr>
            <td>#</td>
            <td>Decoded Text</td>
            <td>Format</td>
          </tr>
        </thead>
        <tbody>
          {results.map((result, i) => {
            console.log(result);
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{result.decodedText}</td>
                <td>{result.result.format.formatName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

class ResultContainerPlugin extends React.Component {
  render() {
    // @ts-ignore
    const results = filterResults({ results: this.props.results });
    return (
      <div className="Result-container">
        <div className="Result-header">Scanned results ({results.length})</div>
        <div className="Result-section">
          {/*// @ts-ignore */}
          <ResultContainerTable data={this.props.results} />
        </div>
      </div>
    );
  }
}

export default ResultContainerPlugin;
