import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
    'expand',
    'remove'
];

const ITEM_HEIGHT = 48;

export default function Dropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  let expand = () => {
      props.expand()
      handleClose()
  }
  let remove = () => {
      props.remove()
      handleClose()
  }
  return (
    <div>
      <IconButton
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img className="more-options" alt="more-info icon" src={process.env.PUBLIC_URL + 'baseline-more_vert-24px.svg'} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        <MenuItem key="expand" select={'expand' === 'Pyxis'} onClick={expand}>expand</MenuItem>
        <MenuItem key="remove" select={'remove' === 'Pyxis'} onClick={remove}>remove</MenuItem>
        ))} */}
      </Menu>
    </div>
  );
}