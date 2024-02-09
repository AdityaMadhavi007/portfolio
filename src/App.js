import logo from './logo.svg';
import './App.css';
import styled , {ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Education from './components/education';

import { BrowserRouter as Router } from 'react-router-dom';

import Skills from './components/Skills';
import Navbar from './components/navbar';
import Hero from './components/HeroScreen';


const Body = styled.div`
  background-color:${({theme}) => theme.bg};
  width:100%;
  height:100%;
  overflow-x:hidden;
  `;

  const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`


function App() {
  return (

    <ThemeProvider theme={darkTheme}>
    <Router>
    <Navbar />
    <Body>
      <Hero />
      <Wrapper>
      <Education />
      <Skills />
      </Wrapper>
    </Body>
      </Router>
    </ThemeProvider>

  );
  }
  
export default App;

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>