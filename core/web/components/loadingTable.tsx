import { Component } from "react";
import { Table } from "react-bootstrap";
import Loader from "./loader";

interface Props {
  loading: boolean;
  size?: string;
}

class LoadingTable extends Component<Props> {
  render() {
    if (this.props.loading) {
      return (
        <>
          <Loader />
          <br />
          <br />
        </>
      );
    }

    const { loading, ...propsExceptLoading } = this.props;

    return (
      <>
        <Table {...propsExceptLoading}>{this.props.children}</Table>
      </>
    );
  }
}

export default LoadingTable;
