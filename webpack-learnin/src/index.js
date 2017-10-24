import _ from 'lodash';
import Cat from './images/cat.jpg';

import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var myCat = new Image();
  myCat.src = Cat;
  element.appendChild(myCat);

  return element;
}

document.body.appendChild(component());