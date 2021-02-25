import { ReactNode, Component } from "react";

interface State {
  width: number;
  height: number;
}

interface Props {
  children: (state: State) => ReactNode;
}

export class ContainerWidthSizer extends Component<Props, State> {
  state = {
    width: 0,
    height: 0,
  };

  container: HTMLDivElement;

  componentDidMount() {
    const container = this.container.getBoundingClientRect();
    const width = Math.max(100, container.width);
    const height = Math.max(200, container.height);
    this.setState({ width, height });
  }

  render() {
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        ref={(c) => (this.container = c)}
      >
        {this.props.children(this.state)}
      </div>
    );
  }
}
