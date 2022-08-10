import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';

import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckIcon from '@mui/icons-material/Check';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import React from 'react';

const TYPES = {
  ERROR: {
    color: '#FF0011',
    action: "Fix",
    icon: WarningAmberIcon,
  },
  INFO: {
    color: '#808080',
    action: "More",
    icon: InfoOutlinedIcon,
  },
  SUCCESS: {
    color: '#3CA700',
    action: "Ok",
    icon: CheckIcon,
  },
  WARNING: {
    color: '#FFA200',
    action: "More",
    icon: NotificationsNoneIcon,
  },
  BALANCE: {
    color: '#006FFF',
    action: "Boost",
    icon: AccountBalanceWalletIcon,
  },
}

const options = {
  // onOpen: props => console.log(props.foo),
  // onClose: props => console.log(props.foo),
  autoClose: 3000,
  // type: toast.TYPE.INFO,
  hideProgressBar: true,
  closeButton: false,
  position: toast.POSITION.BOTTOM_CENTER,
  // pauseOnHover: false,
  // progress: 0.2
  // and so on ...
};

function showToast(toastType, msg) {

  const Icon = toastType.icon

  toast(
    <div style={{
      display: 'flex',
      height: '64px',
      margin: '12px'
    }}>

      <IconButton
        style={{ backgroundColor: '#ffffff' }}
        sx={{
          borderRadius: '50%',
          margin: 'auto',
          marginRight: '-24px',
          border: toastType.color,
          borderStyle: 'solid',
          height: '48px', width: '48px'
        }}>

        <Icon sx={{
          color: toastType.color
        }} />

      </IconButton >



      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: toastType.color,
        flex: 1,
        borderRadius: '16px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}>

        <Typography component={"div"} sx={{ textAlign: "start", fontWeight: '500', margin: 'auto', marginLeft: '32px', color: '#FFFFFF' }} >
          {msg}
        </Typography>

        <div>

        </div>

        <Button
          type="submit"
          size="small"
          variant="contained"
          sx={{ opacity: "0.8", fontWeight: '500', color: toastType.color, ml: 3, mr: 2, borderRadius: '108px', minHeight: '24px', background: '#FFFFFF' }}>

          {toastType.action}

        </Button>
      </div>

      <IconButton
        style={{ backgroundColor: '#ffffff' }}
        sx={{
          borderRadius: '50%',
          margin: 'auto',
          marginLeft: '-12px',
          backgroundColor: '#ffffff',
          border: toastType.color,
          borderStyle: 'solid',
          height: '24px', width: '24px'
        }}>

        <CloseIcon sx={{
          height: '16px', width: '16px', color: '#FF0011'
        }} />

      </IconButton >


    </div>
    , options);
}

const toastHelper = {
  showToast,
  TYPES
}

export default toastHelper;
