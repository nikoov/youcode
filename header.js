import React from 'react';

const Header = ({ onCuisineChange, onDietaryChange, onSpiceLevelChange }) => {
  return (
    <header className="site-header">
      <div className="row align-middle align-justify">
        <h1 className="site-header--logo">Food Recipe</h1>
        <nav className="site-header--menu">
          <button onClick={() => onCuisineChange('Italian')}>Italian</button>
          <button onClick={() => onCuisineChange('Indian')}>Indian</button>
          <button onClick={() => onCuisineChange('Mexican')}>Mexican</button>
          {/* Add more buttons for different cuisines */}
          <button onClick={() => onDietaryChange('Vegetarian')}>Vegetarian</button>
          <button onClick={() => onDietaryChange('Vegan')}>Vegan</button>
          <button onClick={() => onDietaryChange('Gluten-Free')}>Gluten-Free</button>
          {/* Add more buttons for dietary preferences */}
          <button onClick={() => onSpiceLevelChange('Mild')}>Mild</button>
          <button onClick={() => onSpiceLevelChange('Medium')}>Medium</button>
          <button onClick={() => onSpiceLevelChange('Hot')}>Hot</button>
          {/* Add more buttons for spice level */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
