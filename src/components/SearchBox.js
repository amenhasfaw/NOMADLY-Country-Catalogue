import React from 'react';

class SearchBox extends React.Component{
 render(){ return (
    <div className='pa2'>
      <input
        
        className='pa3 mb4 ba b--blue bg-darkest-blue'
        type='search'
        placeholder='search countries'
        onChange={this.props.searchChange}
      />
    </div>
  );}
}

export default SearchBox;