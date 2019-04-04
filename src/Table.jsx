import React from "react";
import cx from "classnames";

class Table extends React.Component {
  render() {
    const { children, className } = this.props;
    return (
      <div className="tableContainer">
        <table className={cx("table", className)}>{children}</table>
      </div>
    );
  }
}

export default Table;
