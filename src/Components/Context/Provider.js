import React,{useState, useContext, createContext} from 'react';
import Container from '@material-ui/core/Container';
import { Login } from '../Login/Login';
import { loginFunction } from '../../Utils/auth.utils'; 

const AuthContext = createContext({
  token: '',
  setToken : () => {},
});

export function AppProvider ({ children }) {
    const [ token, setToken ] = useState(null);
  
    return (
      <AuthContext.Provider value={{token,setToken}} >
        {
          token ? children : (<Container maxWidth="xs" className="App">
          <Login/>
        </Container>)
        }
      </AuthContext.Provider>
    );
}

export const useSession = () => {
    const { setToken } = useContext(AuthContext);
    return async (username,password) => {
        const tkn = await loginFunction(username,password);
        setToken(tkn);
    };
    
}