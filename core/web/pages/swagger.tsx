import { Component } from "react";

interface Props {
  apiVersion: string;
}

export default class Swagger extends Component<Props> {
  componentDidMount() {
    // we need to wait for didMount as swagger won't render with SSR
    const SwaggerUi = require("swagger-ui");

    const { apiVersion } = this.props;

    SwaggerUi({
      dom_id: "#swaggerContainer",
      url: `/api/${apiVersion}/swagger`,
      presets: [SwaggerUi.presets.apis],
      deepLinking: true,
    });
  }

  render() {
    return <div id="swaggerContainer" />;
  }
}
