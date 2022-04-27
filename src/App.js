import Card from "./components/Card";
import Header from "./components/Header";

import data from "./data";

function App() {

  const cardElemrnts = data.map(item => (
    <Card item={item}/>
  ))

  return (
    <div className="App">
      <Header/>

      <div className="Cards">
        {cardElemrnts}
      </div>

    </div>
  );
}

export default App;
