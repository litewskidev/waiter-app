import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import TablesList from "../../views/TablesList/TablesList";

const Home = () => {

  const tablesList = useSelector(getAllTables);

  return(
    <Row>
      <Col>
        <h1>All tables</h1>
        {tablesList.map(tableList => <TablesList key={tableList.id} props={tableList} />)}
      </Col>
    </Row>
  );
};

export default Home;
