import { Component } from "react";

export default class Swagger extends Component {
  componentDidMount() {
    // we need to wait for didMount as swagger won't render with SSR
    const SwaggerUi = require("swagger-ui");

    const swagger = SwaggerUi({
      dom_id: "#swaggerContainer",
      url: `/api/v1/swagger`,
      presets: [SwaggerUi.presets.apis],
      deepLinking: true,
      docExpansion: "none",
      filter: true,
      tagsSorter: (a, b) => {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      },
      onComplete: function () {
        swagger.preauthorizeApiKey(
          "GrouparooCSRFTokenAndSessionCookie",
          localStorage.getItem("session:csrfToken")
        );
      },
    });
  }

  render() {
    return <div id="swaggerContainer" />;
  }
}
