import React from 'react';
import HeaderBar from './header-bar';
import TextAreaAutosize from 'react-textarea-autosize';
import Sortable from 'react-anything-sortable';

export default React.createClass({
  getDefaultProps () {
    return {
      className: 'rfb-item'
    };
  },

  getInitialState () {
    return {
      changedValue: this.props.data.value,
      data: this.props.data
    };
  },

  render() {
    var headerClasses = 'dynamic-input ' + this.props.data.element + '-input';

    return (
      <div>
        <HeaderBar name={this.props.data.text} onDestroy={this.props.onDestroy} onEdit={this.props.onEdit} static={this.props.data.static} required={this.props.data.required} />
        <Sortable>
          {this.props.children}
        </Sortable>
      </div>
    )
  }
})
