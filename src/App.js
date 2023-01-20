import Table from './components/pages/Table/Table';
import { Route, Routes } from "react-router-dom";
import E404 from './components/pages/E404/E404';
import Home from './components/pages/Home/Home';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return(
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<Table />} />
        <Route path='*' element={<E404 />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
