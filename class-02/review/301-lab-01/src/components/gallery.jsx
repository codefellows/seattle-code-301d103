import React from 'react';
import HornedBeast from './hornedbeast.jsx';
import Image1 from '../assets/dog horns.png';
import Image2 from '../assets/doge.png';


class Gallery extends React.Component{
  render() {
    return (
      <>
        <HornedBeast title="Doggo gone Goat" image={Image1} description="This is a dog with Horns" />
        <HornedBeast title="A Distiguished Gentleman" image={Image2} description="This is a fancy doge, also known as a good boi." />
      </>
    )
  }
 }
export default Gallery;