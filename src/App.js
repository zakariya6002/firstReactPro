import logo from './logo.svg';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import Navbar from './components/Navbar'
import Grid from './components/grid'
import Footer from './components/footer'
import './App.css';

////////////////////////////////
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <Navbar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             At Rocket.io we are passionate about software
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid icon={<SecurityIcon style={{fill: '#C13404C', height: '125', width: '125'}}/>} title="Secure" btnTitle= 'Show me more'/>
        <Grid icon={<EventNoteIcon style={{fill: '#196776', height: '125', width: '125'}}/>} title="Reliable" btnTitle= 'Show me more'/>
        <Grid icon={<TrendingUpIcon style={{fill: '#7F2241', height: '125', width: '125'}}/>} title="Performance" btnTitle= 'Show me more'/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>        
        </ThemeProvider>
    </div>
  );
}

export default App;
