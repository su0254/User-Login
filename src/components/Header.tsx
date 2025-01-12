import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router';
import { createContext, Dispatch, useEffect, useReducer, useState } from 'react';
import userType, { Action, UserType } from '../types/userType';
import Login from './login';
import Avatar from './Avatar';
import UpdateDetails from './UpdateDetails';
import NavBar from './NavBar';


export const Themeuser = createContext<{ user: UserType, userDispatch: Dispatch<Action> }>({
  user: {},
  userDispatch: () => null,
})

export const IsLogin = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])

export default function header() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, userDispatch] = useReducer(userType, { id:0,
    firstName:'',
    lastName: '',
    email:'',
    password:'',
    address: '',
    phone: ''
})

  return (
    <IsLogin.Provider value={[isLogin, setIsLogin]}>
      <Themeuser.Provider value={{ user, userDispatch, }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>

              <Box>
                {!isLogin && <Login />}

                {isLogin && <Avatar />}

              </Box>

              <Box>
                {isLogin && <UpdateDetails />}

              </Box>
              <Box>
                <NavBar />
              </Box>

            </Toolbar>
          </AppBar>
          <Outlet />
        </Box>
      </Themeuser.Provider>
    </IsLogin.Provider>
  )
}
