import "./App.css";
import TopBanner from "./Component/Top-Banner/TopBanner";
import Header from "./Component/Header/Header";
import Imagem from "./Component/Imagem/Imagem";
import Flag from "./Component/Flag/Flag"
import TitleTime from "./Component/TitleTime/TitleTime";
import CarrosselCard from "./Component/CarroselCard/CarroselCard";
import ButtonView from "./Component/ButtonView/ButtonView";
import Hr from "./Component/Hr/Hr"
import CarrosselCategory from "./Component/CarrosselCategory/CarroselCategory"

function App() {
  return (
    <>
      <TopBanner />
      <Header />
      <Imagem/>
      <Flag title="Today's"/>
      <TitleTime title="Flash Sale" time="true"/>
      <CarrosselCard></CarrosselCard>
      <ButtonView title="View all product"/>
      <Hr/>
      <Flag title="Categories" />
      <TitleTime title="Browse By Category" time="false"/>
      <CarrosselCategory/>
    </>
  );
}

export default App;
