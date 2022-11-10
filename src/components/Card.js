import React from 'react';

class Card extends React.Component {
  render(){
    return (
    <div className='tc grow bg-lightest-blue br3 pa3 ma3 dib bw2 shadow-5'>
      <img style={{height: '150px'}} alt={`${this.props.name} Flag`} src={`https://countryflagsapi.com/svg/${this.props.id}`} />
      <div>
        <h2>{this.props.name}</h2>
        <h3>- {this.props.abbreviation} -</h3>
        <p><strong>Official Name: </strong></p>
          <p> {this.props.official}</p>
        <p><strong>Capital City: </strong> {this.props.capital}</p>
        <p><strong>Population: </strong> {this.props.population}</p>
        <p><strong>Area: </strong> {this.props.area} ㎢</p>
        <p><strong>Flags: </strong> {this.props.flags}</p>
        <p><strong>Domain:</strong> {this.props.domain}</p>
        <p><strong>Region: </strong> {this.props.region}</p>
        <p><strong>Sub-region: </strong> {this.props.subregion}</p>
        <p><strong>Map: </strong> <a href={`${this.props.maps}`}>Google Map Link</a></p>

      </div>
    </div>
  );}
}

export default Card;
