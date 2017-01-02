import React from 'react';

class Pagination extends React.Component {
  render() {
    let total_pages = Math.floor((this.props.total + 10 - 1) / 10);
    if (total_pages < 2) {
      return false;
    }
    let tmpl = [...Array(total_pages).keys()].map((i) => {
      return (<a href="#" onClick = {e => {this.props.onClick(this.props.text, i + 1);} }>{i + 1} </a>);
    })
    return (<div>
              {tmpl}
            </div>);
  }
}

export default Pagination;
