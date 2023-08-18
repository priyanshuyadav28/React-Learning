import "./App.css";
import Appointment from "./components/Appointment";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import BlogText from "./components/BlogText";
import Grid from "./components/Grid";


function App() {

  return (
    <div className="wrapper">
      <Header></Header>
      <Appointment></Appointment>
      <Navbar></Navbar>
      <Blog></Blog>
      <BlogText></BlogText>
      <Grid></Grid>
    </div>
  );
}

export default App;
