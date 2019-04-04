import React from "react";

class TBody extends React.Component {
  render() {
    const { children, className } = this.props;
    return <tbody className={className}>{children}</tbody>;
  }
}

export default TBody;
