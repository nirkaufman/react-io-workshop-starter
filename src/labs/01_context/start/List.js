import React, {Component} from 'react';
import {addItem, removeItem} from '../shared/actions';
import {connect} from '../end/react-redux';

// 01_03: Implement connect on the bottom of this file
class List extends Component {

  addItem = ({key, currentTarget}) => {
    if(currentTarget.value.length === 0) return;

    if (key === "Enter") {
      this.props.add(currentTarget.value)
    }
  };

  render() {
    return (
      <div>
        <input placeholder="Add item..."
               style={{marginBottom: '15px'}}
               onKeyDown={this.addItem}
               className="form-control"/>

        <ul className="list-group">
          {(this.props.items).map((item, i) => (
            <li className="list-group-item" key={i}>
              {item}
              <span className="close"
                    onClick={() => this.props.remove(item)}>X</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  add: (item) => dispatch(addItem(item)),
  remove: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

