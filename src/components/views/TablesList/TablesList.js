import { Button, ListGroup, Spinner, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const TablesList = ({ props }) => {

  const tableId = props.id;
  const tableStatus = props.status;

  if (!{ TablesList }) return (
    <div className="d-flex justify-content-center">
        <Spinner variant="primary" animation="border" role="status" />
    </div>
  )

  return(
    <ListGroup variant='flush'>
      <ListGroup.Item className='px-0'>
        <Stack direction="horizontal" gap={4}>
          <h3>Table {tableId}</h3>
          <p className='mb-0'><b>Status: </b>{tableStatus}</p>
          <Link className='ms-auto' to={"/table/"+ tableId}>
            <Button variant="primary">Show more</Button>
          </Link>
        </Stack>
      </ListGroup.Item>
    </ListGroup>
  );
};

  export default TablesList;
