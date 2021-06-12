import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from "./ui/Theme";
import Footer from './ui/Footer';

function App() {

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/services" component={() => <div>Services</div>} />
            <Route exact path="/revolution" component={() => <div>Revolution</div>} />
            <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
            <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
            <Route exact path="/websites" component={() => <div>Websites</div>} />
            <Route exact path="/about" component={() => <div>About</div>} />
            <Route exact path="/contact" component={() => <div>Contact</div>} />
            <Route exact path="/estimate" component={() => <div>Estimate</div>} />
          </Switch>
          <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
