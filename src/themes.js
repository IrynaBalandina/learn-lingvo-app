import greyImg from '../src/assets/grayImg.png';
import orangeImg from '../src/assets/orangeImg.png';
import redImg from '../src/assets/redImg.png';
import blueImg from '../src/assets/blueImg.png';
import greenImg from '../src/assets/greenImg.png';
import roseImg from '../src/assets/roseImg.png';
import { Languages } from 'lucide-react';


const themes = [
  {
    buttonColor: '#fc55',
    highlightColor: '#Fbe9ba',
    image: orangeImg,
    languageBg:'#fc55',
  },
  {
    buttonColor: '#9fbaae',
    highlightColor: '#cbdeb3',
    image: greenImg,
     languageBg:'#9fbaae',
  },
  {
    buttonColor: '#9fb7ce',
    highlightColor: '#bfd6ea',
    image: blueImg,
     languageBg:'#9fb7ce',
  },
  {
    buttonColor: '#e0a39a',
    highlightColor: '#f2c0bd',
    image: redImg,
     languageBg:'#e0a39a',
  },

     { buttonColor: '#f0aa8d',
    highlightColor: '#f4c8ba',
    image: roseImg,
     languageBg:'#f0aa8d',
  },
  {
    buttonColor: '#8a8a89',
    highlightColor: '#8a8a89',
    image: greyImg,
     languageBg:'#8a8a89',
  },

  
];

export default themes;