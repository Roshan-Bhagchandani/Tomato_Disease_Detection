import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";

import "./CSS/style.css"
import "./CSS/index.css"
import { Form } from "./Components/Form";
import { Cardbox } from "./Components/Cardbox";
import { Aboutus } from "./Components/Aboutus";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Form/>
      <Cardbox/>
      <Aboutus/>
    </div>
  );
}

export default App;
