import { PaginationProps } from "../interfaces/props";
import { convertNumberToArray } from "../utils/converters";

const Pagination = ({ pagesCount, onChangePage, currentPage }: PaginationProps) => {
  return (
    <div className="pagination">
      {convertNumberToArray(pagesCount).map((pageNumber, index) => (
        <span
          key={index}
          className={`pagination__item ${currentPage === index ? "active" : ""}`}
          onClick={() => onChangePage(index)}
        >
          {pageNumber + 1}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
