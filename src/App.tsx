import { AppContainer } from './App.styled'
import { Home } from './pages/Home'
import { PopUpSearchPage } from './pages/PopUpSearchPage'
import { Routes, Route } from "react-router-dom";
import SearchWordProvider from './Context/SearchPagesContext';
import { WebSearch } from './pages/WebSearch';
import { PagesSearch } from './pages/PagesSearch';
import { ImagesSearch } from './pages/ImagesSearch';

function App() {

  return (
    <AppContainer>
      <SearchWordProvider>
        <PagesSearch />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/PopUp' element={<PopUpSearchPage />} />
          <Route path='/WebSearch' element={<WebSearch />} />
          <Route path='/ImagesSearch' element={<ImagesSearch />} />
        </Routes>
      </SearchWordProvider>
    </AppContainer>
  )
}

export default App
