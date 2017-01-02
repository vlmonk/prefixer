import React from 'react';

class SearchForm extends React.Component {
  render() {
    let input;
    let onSubmit = this.props.onSubmit;
    console.log(this.props);
    return (<div className="search-form">
              <form onSubmit={e => {
                e.preventDefault();
                onSubmit(input.value, 1)
              }}>

                <input ref={node => {
                  input = node
                }} />

                <button type="submit">
                  Search
                </button>
              </form>
            </div>);
  }
}
export default SearchForm;
