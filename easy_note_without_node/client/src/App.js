import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import Create from "./pages/Create";
import Notes from "./pages/Notes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    typography: {
      fontFamily: "Quicksand",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
