import React from "react";
import cx from "classnames";
import "./tcell.css";
class TCell extends React.Component {
  render() {
    const { children, className } = this.props;
    return <td className={cx("tcell", className)}>{children}</td>;
  }
}

export default TCell;
