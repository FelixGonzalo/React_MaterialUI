import {ThemeProvider} from '@material-ui/core/styles'
import Contenedor from './components/Contenedor';
import theme from './temaConfig'

function App() {

  // theme general

  return (
    <ThemeProvider theme={theme}>
      <Contenedor/>
    </ThemeProvider>
  );
}

export default App;
