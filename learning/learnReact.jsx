import React from 'react';
import ReactDOM from 'react-dom';


const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));




//boy howdy did I not take enough notes


//adding keys to my li items while using .map
const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map((person, i) => <li key={'person_' + i}>{person}</li>



class MyComponentClass extends React.Component {
    render() {
      return <h1>Hello world</h1>;
    }
  }
  // component goes here:
  ReactDOM.render(<MyComponentClass />, document.getElementById('app'))


  //an owl stamp and the things stamps are made of
  const owl = {
    title: 'Excellent Owl',
    src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
  };
  // Component class starts here:
  class Owl extends React.Component {
    render() {
      return (
        <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
        </div>
      )
    }
  }



// use [this] to refer to the enclosing method of whatever method you use after it, scope is very important here
class MyName extends React.Component {
get name() {
  return 'Will'
}

  render() {
    return <h1>My name is {this.name}</h1>;
  }
}


class Button extends React.Component {
    scream() {
      alert('AAAAAAAAHHH!!!!!');
    }
  
    render() {
      return <button onClick={this.scream}>AAAAAH!</button>;
    }
  }