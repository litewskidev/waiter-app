import Table from './components/pages/Table/Table';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import E404 from './components/pages/E404/E404';
import Home from './components/pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

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
