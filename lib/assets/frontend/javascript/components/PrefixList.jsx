import React from 'react';

import { connect } from 'react-redux';

class PrefixList extends React.Component {
  render() {
    if (this.props.prefixes.length == 0) {
      return false;
    }
    let template = this.props.prefixes.map((prefix, index) => {

      return (<tr key={"prefix-" + index}>
                <td>{prefix.prefix}</td>
                <td>{prefix.comment}</td>
              </tr>);
    });
    let onClick = this.props.onClick;
    return (<table className="table">
              <thead>
                <tr>
                  <th><a href="#" onClick={ e => { e.preventDefault(); onClick("prefix", this.props.sort_order.prefix, this.props.prefixes)} }>Prefix { this.props.sort_order.prefix }</a></th>
                  <th><a href="#" onClick={ e => { e.preventDefault(); onClick("comment", this.props.sort_order.comment, this.props.prefixes)} }>Comment { this.props.sort_order.comment }</a></th>
                </tr>
              </thead>
              <tbody>
                {template}
              </tbody>
            </table>);
  }
}

export default PrefixList;
