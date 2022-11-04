import React from 'react';

class Scroll extends React.Component{
  render(){
    return (
    <div className='pa3' style={{ overflow: 'scroll',border: '1px solid black', height: '800px'}}>
      {this.props.children}
    </div>
  );
};}

export default Scroll;