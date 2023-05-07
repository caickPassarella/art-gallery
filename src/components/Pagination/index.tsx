import { useState } from "react";
import { Circle } from "./paginationElements";

interface PaginationProps {
  numOfPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
  numOfPages,
  currentPage,
  onPageChange,
}: PaginationProps) => (
  <div>
    {Array(numOfPages)
      .fill(0)
      .map((_, index) => (
        <Circle
          isFilled={currentPage === index}
          key={index}
          onClick={() => onPageChange(index)}
        />
      ))}
  </div>
);
