import React from 'react';
import Switch from '@material-ui/core/Switch';

function Switches({Max_amount, Min_amount}) {
  const [show, setShow] = React.useState(true);

  const handleChange = (event) => {
    setShow(event.target.checked);
  };

  return (
    <div>
      <Switch
        checked={show}
        onChange={handleChange}
        name="checked"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      {
        show == true ? <p style ={{minWidth:"300px", color:"red"}}>Maximum bids : {Max_amount}</p> : 
        <p style ={{minWidth:"300px", color:"red"}}>Minimum bids : {Min_amount}</p>
      }
      
      
      
    </div>
  );
}
export default Switches;