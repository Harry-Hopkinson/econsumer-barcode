import { Html5QrcodeScanner } from "html5-qrcode";
import React from "react";

const qrcodeRegionId = "html5qr-code-full-region";

class Html5QrcodePlugin extends React.Component {
  [x: string]: any;
  render() {
    return <div id={qrcodeRegionId} />;
  }

  componentWillUnmount() {
    this.html5QrcodeScanner.clear().catch((error: any) => {
      console.error("Failed to clear Scanner. ", error);
    });
  }

  componentDidMount() {
    function createConfig(props: any) {
      var config: any = {};
      if (props.fps) {
        config.fps = props.fps;
      }
      if (props.qrbox) {
        config.qrbox = props.qrbox;
      }
      if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
      }
      if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
      }
      return config;
    }

    var config = createConfig(this.props);
    // @ts-ignore
    var verbose = this.props.verbose === true;

    this.html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose,
    );
    this.html5QrcodeScanner.render(
      // @ts-ignore
      this.props.qrCodeSuccessCallback,
      // @ts-ignore
      this.props.qrCodeErrorCallback,
    );
  }
}

export default Html5QrcodePlugin;
