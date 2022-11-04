import React from 'react';

class Card extends React.Component {
  render(){
    return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${this.props.id}?size=200x200`} />
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    </div>
  );}
}

export default Card;
