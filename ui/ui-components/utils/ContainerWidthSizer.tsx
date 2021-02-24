import * as React from "react";

interface State {
  width: number;
}

interface Props {
  children: (state: State) => React.ReactNode;
}

export class ContainerWidthSizer extends React.Component<Props, State> {
  state = {
    width: 0,
  };

  container: HTMLDivElement;

  componentDidMount() {
    this.setState({
      width: this.container.getBoundingClientRect().width,
    });
  }

  render() {
    return (
      <div ref={(c) => (this.container = c)}>
        {this.props.children(this.state)}
      </div>
    );
  }
}
