import React from "react";

const searchForm = props => {
  const { onSearchForm } = props;
  return (
    <form onSubmit={onSearchForm}>
      <label>
        <input type="text" />
      </label>
      <input type="submit" value="Найти" />
    </form>
  );
};

export default searchForm;
