import React from "react";

class THead extends React.Component {
  render() {
    const { children, className } = this.props;
    return <thead className={className}>{children}</thead>;
  }
}

export default THead;
