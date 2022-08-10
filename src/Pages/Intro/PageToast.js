import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import React, { Fragment } from 'react';
import toastHelper from 'toastHelper';

function PageToast() {

  function handleOnIconClick(params) {
  }

  function handleOnNextClick(params) {


    toastHelper.showToast(toastHelper.TYPES.SUCCESS, "asdasd")
  }

  var Balance = <Fragment>
    Balance: 50$
    <Typography sx={{ fontSize: "12px", fontWeight: 'normal' }} >
      Fund: 50$
    </Typography>
  </Fragment>

  return (

    <Container component="main" maxWidth="xs" >

      {
        Object.keys(toastHelper.TYPES).map(
          (typeName) => <Button
            key={typeName}
            type="submit"
            fullWidth
            variant="contained"
            onClick={() => toastHelper.showToast(toastHelper.TYPES[typeName], typeName === "BALANCE" ? Balance : typeName)}
            sx={{ background: toastHelper.TYPES[typeName].color, mt: 3, mb: 2, borderRadius: '108px', minHeight: '48px' }}>

            {typeName}

          </Button>
        )

      }


    </Container>

  )
}

export default PageToast;
