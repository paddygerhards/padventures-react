import React, { ChangeEvent } from "react";

interface FilterProps {
  authors: string[];
  onFilterChange: (author: string | null) => void;
}

const Filter: React.FC<FilterProps> = ({ authors, onFilterChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedAuthor =
      event.target.value === "all" ? null : event.target.value;
    onFilterChange(selectedAuthor);
  };

  return (
    <div>
      <label htmlFor="author-filter">Filter by Author:</label>
      <select id="author-filter" onChange={handleChange}>
        <option value="all">All</option>
        {authors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
