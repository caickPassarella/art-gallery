import { useState } from "react";
import { Circle, CircleWrapper } from "./paginationElements";

interface PaginationProps {
  numOfPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  numOfPages,
  currentPage,
  onPageChange,
}) => (
  <CircleWrapper>
    {Array(numOfPages)
      .fill(0)
      .map((_, index) => (
        <Circle
          isFilled={currentPage === index}
          key={index}
          onClick={() => onPageChange(index)}
        />
      ))}
  </CircleWrapper>
);
