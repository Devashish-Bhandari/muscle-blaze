import React from 'react'
import {Link} from 'react-router-dom';
import {Stack, Typography} from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    // NAVBAR DIV
    <Stack
      direction="row"
      justifyContent="space-around" 
      sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} 
      px="20px"
    >
      {/* LOGO WITH LINK TO HOME */}
      <Link to="/">
        <img src={Logo} alt="Logo" style={{ height:'48px', margin:'0 20px'}} />
      </Link>

      {/* NAV LINKS DIV */}
      <Stack
        direction="row"
        gap="50px"
        fontSize="24px"
        alignItems="flex-end" 
      >
        <Link to ="/" style={{textDecoration: 'none', color:'#3a1212', borderBottom:'3px solid #ff2625'}}>
          <Typography variant="h5">
            Home 
          </Typography> 
        </Link>

        <a className='exercise-link' href="#exercises" style={{textDecoration: 'none', color:'#3a1212'}}  >
          <Typography variant="h5">
              Exercises
          </Typography> 
        </a>
      </Stack>

    </Stack>
  )
}

export default Navbar