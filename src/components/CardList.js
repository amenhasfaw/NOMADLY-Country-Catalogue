import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render(){
    return (
    <div>
      {
        this.props.countries.map((user, i) => {
          return (
            <Card
              key={i}
              id={this.props.countries[i].ccn3}
              name={this.props.countries[i].name.common}
              capital={this.props.countries[i].capital}
              region={this.props.countries[i].region}
              population={this.props.countries[i].population}
              />
          );
        })
      }
    </div>
  );}
}

export default CardList;