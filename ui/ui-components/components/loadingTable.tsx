import { Component } from "react";
import { Table } from "react-bootstrap";
import Loader from "./Loader";

interface Props {
  loading: boolean;
  size?: string;
}

export default class LoadingTable extends Component<Props> {
  render() {
    const { loading, ...propsExceptLoading } = this.props;

    if (this.props.loading) {
      // @ts-ignore this.props.children is an array, it's OK
      const head = this.props.children.find((c) => c.type === "thead");

      return (
        <Table {...propsExceptLoading}>
          {head ? head : null}
          <tbody>
            <tr>
              <td
                colSpan={999} // arbitrarily large number to span all columns
                style={{ textAlign: "center", verticalAlign: "middle" }}
              >
                <Loader />
              </td>
            </tr>
          </tbody>
        </Table>
      );
    } else {
      return (
        <>
          <Table {...propsExceptLoading}>{this.props.children}</Table>
        </>
      );
    }
  }
}
