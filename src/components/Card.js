import React from 'react';

class Card extends React.Component {
  render(){
    return (
    <div className='tc grow bg-lightest-blue br3 pa3 ma3 dib bw2 shadow-5'>
      <img style={{height: '200px'}} alt='countries' src={`https://countryflagsapi.com/svg/${this.props.id}`} />
      <div>
        <h2>{this.props.name}</h2>
        <p><strong>Capital City: </strong> {this.props.capital}</p>
        <p><strong>Population: </strong> {this.props.population}</p>
        <p><strong>Region: </strong> {this.props.region}</p>

      </div>
    </div>
  );}
}

export default Card;
