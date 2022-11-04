import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render(){
    return (
    <div>
      {
        this.props.robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={this.props.robots[i].ccn3}
              name={this.props.robots[i].name.common}
              capital={this.props.robots[i].capital}
              region={this.props.robots[i].region}
              population={this.props.robots[i].population}



              />
          );
        })
      }
    </div>
  );}
}

export default CardList;