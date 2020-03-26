import React from "react";
import { Pagination } from "react-bootstrap";

function PaginationHelper({ offset = 0, total = 0, limit = 100, onPress }) {
  // page        => What page are we on?
  // total       => The total number of items we are paginating
  // limit     => How many items are shown per page?
  // onPress.....=> Function from parent component to call when button is pressed

  function handleSelect(page) {
    const newOffset = page * limit;
    onPress(newOffset);
  }

  const page = Math.floor(offset / limit);
  const lastPage = Math.ceil(total / limit) - 1;

  if (total === 0) {
    return null;
  }
  if (lastPage === 0) {
    return null;
  }

  return (
    <Pagination>
      {page !== 0 ? <Pagination.First onClick={() => handleSelect(0)} /> : null}
      {page !== 0 ? (
        <Pagination.Prev onClick={() => handleSelect(page - 1)} />
      ) : null}
      {page - 2 >= 0 ? (
        <Pagination.Item onClick={() => handleSelect(page - 2)}>
          {page + 1 - 2}
        </Pagination.Item>
      ) : null}
      {page - 1 >= 0 ? (
        <Pagination.Item onClick={() => handleSelect(page - 1)}>
          {page + 1 - 1}
        </Pagination.Item>
      ) : null}
      <Pagination.Item active>{page + 1}</Pagination.Item>
      {page + 1 <= lastPage ? (
        <Pagination.Item onClick={() => handleSelect(page + 1)}>
          {page + 1 + 1}
        </Pagination.Item>
      ) : null}
      {page + 2 <= lastPage ? (
        <Pagination.Item onClick={() => handleSelect(page + 2)}>
          {page + 1 + 2}
        </Pagination.Item>
      ) : null}
      {lastPage > page ? (
        <Pagination.Next onClick={() => handleSelect(page + 1)} />
      ) : null}
      {lastPage > page ? (
        <Pagination.Last onClick={() => handleSelect(lastPage)} />
      ) : null}
    </Pagination>
  );
}

export default PaginationHelper;
