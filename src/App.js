import { MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from './component/GlobalStyles';
import TopBar from './component/Header';
import LoginPage from './component/views/Login/Login';
import theme from './component/views/Login/LoginTheme';
import NavBar from './component/Nav/NavBar';

function App() {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <MuiThemeProvider theme={theme}>
        <LoginPage />
      </MuiThemeProvider>
      <NavBar />
    </>
  );
}

export default App;
