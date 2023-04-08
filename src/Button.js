import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Bileşenin stili için CSS dosyasını import ettik.

const Button = ({ type, onClick, children }) => {
  // "type" prop'u ile belirtilen tip değerine göre stil sınıfını belirliyoruz.
  let className = 'button';
  switch (type) {
    case 'primary':
      className += ' primary';
      break;
    case 'default':
      className += ' default';
      break;
    case 'dashed':
      className += ' dashed';
      break;
    case 'text':
      className += ' text';
      break;
    case 'link':
      className += ' link';
      break;
    default:
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;