import Header from "./components/Header";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import "./App.css";
import { useState } from "react";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodid, setFoodId] = useState("658615");
  return (
    <>
      <div className="appclass">
        <Header />
        <Search foodData={foodData} setFoodData={setFoodData} />

        <Container>
          <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </InnerContainer>
          <InnerContainer>
            <FoodDetails foodid={foodid} />
          </InnerContainer>
        </Container>

      </div>
    </>
  );
}

export default App;
