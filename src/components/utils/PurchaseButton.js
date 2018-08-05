import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const PurchaseButton = ({ text, background, color, link }) => {
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{ background: background, color: color }}
    >
      <a href={link}>
        <img src={TicketIcon} className="iconImage" />
      </a>
      {text}
    </Button>
  );
};

export default PurchaseButton;
