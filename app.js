import React from 'react';

import Footer from './footer';
import Form from './form';
import Header from './header';
import Recipes from './recipes';

import './../css/style.css';

const API_KEY = '99f3667bc1a20c4962883bd3d8d21181';

class App extends React.Component {
  state = {
    recipes: [],
    cuisinePreference: '',
    dietaryPreference: '',
    spiceLevel: ''
  };

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=30`);
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
  };

  handleCuisineChange = (cuisine) => {
    this.setState({ cuisinePreference: cuisine });
  };

  handleDietaryChange = (dietary) => {
    this.setState({ dietaryPreference: dietary });
  };

  handleSpiceLevelChange = (spiceLevel) => {
    this.setState({ spiceLevel: spiceLevel });
  };

  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    if (json === null) {
      return;
    }
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div style={{ backgroundColor: '#F5DEB3', minHeight: '100vh', padding: '20px' }}>
        <Header
          onCuisineChange={this.handleCuisineChange}
          onDietaryChange={this.handleDietaryChange}
          onSpiceLevelChange={this.handleSpiceLevelChange}
        />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
        <Footer />
      </div>
    );
  }
}

export default App;
