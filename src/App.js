import React from 'react';
import { useRoutes } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from './component/GlobalStyles';
import routes from './routes';
import theme from './component/views/Login/LoginTheme';

const App = () => {
  const routing = useRoutes(routes);
  return (
    <>
      <MuiThemeProvider theme={theme}>
      <GlobalStyles />
        {routing}
      </MuiThemeProvider>
    </>
  );
};

export default App;
