import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/header/Header'
import Homepages from './components/home/Homepages'
import Footer from './components/common/footer/Footer'
import Asia from './components/continents/asia/Asia'
import Africa from './components/continents/africa/Africa'
import NorthAmerica from './components/continents/north-america/North-America'
import SouthAmerica from './components/continents/south-america/South-America'
import Europe from './components/continents/europe/Europe'
import Australia from './components/continents/australia/Australia'
import SinglePage from './components/singlePage/SinglePage'
import AsiaPage from './components/continents/asia/SinglePage'
import AfricaPage from './components/continents/africa/SinglePage'
import NorthAmericaPage from './components/continents/north-america/SinglePage'
import SouthAmericaPage from './components/continents/south-america/SinglePage'
import EuropePage from './components/continents/europe/SinglePage'
import AustraliaPage from './components/continents/australia/SinglePage'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepages/>}></Route>
          <Route path='/singlepage/:id' element={<SinglePage/>}></Route>
          <Route path='/asia' element={<Asia/>}></Route>
          <Route path='/singlepage/asia/:id' element={<AsiaPage/>}></Route>
          <Route path='/africa' element={<Africa/>}></Route>
          <Route path='/singlepage/africa/:id' element={<AfricaPage/>}></Route>
          <Route path='/north-america' element={<NorthAmerica/>}></Route>
          <Route path='/singlepage/northamerica/:id' element={<NorthAmericaPage/>}></Route>
          <Route path='/south-america' element={<SouthAmerica/>}></Route>
          <Route path='/singlepage/southamerica/:id' element={<SouthAmericaPage/>}></Route>
          <Route path='/europe' element={<Europe/>}></Route>
          <Route path='/singlepage/europe/:id' element={<EuropePage/>}></Route>
          <Route path='/australia' element={<Australia/>}></Route>
          <Route path='/singlepage/australia/:id' element={<AustraliaPage/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App