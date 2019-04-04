import React from "react";
import cx from "classnames";
import "./trow.css";

class TRow extends React.Component {
  render() {
    const { children, className } = this.props;
    return <tr className={cx("trow", className)}>{children}</tr>;
  }
}

export default TRow;
