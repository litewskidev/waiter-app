import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { statuses } from "../../../redux/statusRedux";
import { getTableById, updateAPITables } from "../../../redux/tablesRedux";

const Table = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(Number(table.peopleAmount));
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(Number(table.maxPeopleAmount));
  const [bill, setBill] = useState(Number(table.bill));


  useEffect(() => {
    if (status === statuses.cleaning || status === statuses.free) {
      setPeopleAmount(0);
    }
    if (status !== statuses.busy) {
      setBill(0);
    }
  }, [status]);

  useEffect(() => {
    if (maxPeopleAmount < peopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }, [peopleAmount, maxPeopleAmount]);


    if (!table) return <Navigate to="/" />


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id,
      status,
      bill,
      peopleAmount,
      maxPeopleAmount,
    };
    dispatch(updateAPITables(data));
    //console.log(data);
    navigate("/");
  };


  return(
    <div>
      <h1 className="my-4">Table {table.id}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="my-3">
          <Form.Label column sm={2} lg={1}>
            <b>Status:</b>
          </Form.Label>
          <Col sm={4} lg={2}>
            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
              {Object.values(statuses).map((value) => (<option key={value}>{value}</option>))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className={status === statuses.cleaning || status === statuses.free  ? "d-none" : "my-3"}>
          <Form.Label column sm={2} lg={1}>
            <b>People:</b>
          </Form.Label>
          <Col sm={2} lg={1}>
            <Form.Control type="number" min="0" max={maxPeopleAmount} value={peopleAmount || ""} onChange={(e) => setPeopleAmount(Number(e.target.value))} />
          </Col>
          /
          <Col sm={2} lg={1}>
            <Form.Control type="number" min="0" max="10" value={maxPeopleAmount || ""} onChange={(e) => setMaxPeopleAmount(Number(e.target.value))} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className={status !== statuses.busy ? "d-none" : "my-3"}>
          <Stack direction="horizontal">
            <Form.Label column sm={2} lg={1}>
              <b>Bill:</b>
            </Form.Label>
            <Form.Text>
              <p className="m-1">$ </p>
            </Form.Text>
            <Col sm={2} lg={1}>
              <Form.Control type="number" value={bill} onChange={(e) => setBill(e.target.value)} />
            </Col>
          </Stack>
        </Form.Group>
        <Button variant="primary" type="submit">Update</Button>
      </Form>
    </div>
  );
};

export default Table;
