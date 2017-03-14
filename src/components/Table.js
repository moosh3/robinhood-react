import React, { Component, PropTypes } from 'react';

const propTypes = {
  authed: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

class Table extends Component {

  render() {
      var items = [];
      for (var symbol in this.props.stocks) {
          var stock = this.props.stocks[symbol];
          items.push(<StockRow key={stock.symbol} stock={stock} last={this.props.last} unwatchStockHandler={this.props.unwatchStockHandler}/>);
      }
      return (
          <div className="row">
          <table className="table-hover">
              <thead>
                  <tr>
                      <th>Symbol</th>
                      <th>Open</th>
                      <th>Last</th>
                      <th>Change</th>
                      <th>High</th>
                      <th>Low</th>
                      <th>Unwatch</th>
                  </tr>
              </thead>
              <tbody>
                  {items}
              </tbody>
          </table>
          </div>
      );
    }

    )
  }
}

Table.propTypes = propTypes;

export default Table;
