import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import './MainMenu.css';

import AccessTime from '@mui/icons-material/AccessTime';
import Settings from '@mui/icons-material/Settings';
import CreditCard from '@mui/icons-material/CreditCard';
import Close from '@mui/icons-material/Close';
import React from 'react';


function MainMenu(props) {

  function handleOnNextClick(params) {
    toast('clicked')
  }

  const list = [
    { title: 'Settings', icon: Settings },
    { title: 'Financial', icon: CreditCard },
    { title: 'Contact', icon: Close },
    { title: 'Library', icon: Close },
    { title: 'Courses', icon: Close },
    { title: 'Badges & honors', icon: Close },
    { title: 'Dark Mode', icon: Close },
    { title: 'User Profile', icon: Close },
    { title: 'Support', icon: Close },
    { title: 'Logout', icon: Close },

  ]

  function getItem(item) {
    return <Button className="MainMenu__item" key={item.title} sx={{
      margin: '16px',
      display: 'flex',
      flexDirection: 'column',
      color: '#ffffff',
      backgroundColor: '#006FFF77',
      height: '224px',
      width: '224px',
      borderRadius: '38px',
      fontSize: '1.25rem'
      // flex: '1 0 15%',
    }}>

      <item.icon sx={{
        color: '#ffffff',
        height: '50%',
        width: '100%',
        mb: 2
      }} />

      {item.title}
    </Button>
  }


  return (

    <div className='MainMenu__container scroll__container'>
      <div className='' style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto', justifyContent: 'center' }}>
        {
          list.map(i => getItem(i))
        }
      </div>

      <Button className='MainMenu__close' onClick={props.toggleDrawer} sx={{
        margin: '16px',
        color: '#ffffff',
        position: 'fixed',
        top: 0,
        right: 0
      }}>

        <Close sx={{
          color: '#ffffff',
          height: '100%',
          width: '100',
        }} />

      </Button>

    </div>

  )
}

export default MainMenu;
