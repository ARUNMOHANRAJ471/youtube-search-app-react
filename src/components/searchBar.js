import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  onInputChange(event) {
      this.setState({term: event.target.value});
      this.props.onSearchItemChange(event.target.value);
  }

  render() {
    return (<div className="search-bar">
      <input
        value = {this.state.term}
        onChange={this.onInputChange.bind(this)}/>
    </div>);
  }
}

export default SearchBar;
