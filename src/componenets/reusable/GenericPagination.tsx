import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  limit: number;
  total: number;

  query?: string;

  onPageChange: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  onQueryChange?: (query: string) => void;

  limitOptions?: number[];

  siblingCount?: number;

  loading?: boolean;
  disabled?: boolean;

  wrapperClassName?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  inputClassName?: string;
  selectClassName?: string;
  textClassName?: string;
}

const Pagination = ({
  page,
  limit,
  total,
  query = "",

  onPageChange,
  onLimitChange,
  onQueryChange,

  limitOptions = [10, 20, 50, 100],

  siblingCount = 1,

  loading = false,
  disabled = false,

  wrapperClassName = "",
  buttonClassName = "",
  activeButtonClassName = "",
  inputClassName = "",
  selectClassName = "",
  textClassName = "",
}: PaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const isDisabled = disabled || loading;
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const [pageInput, setPageInput] = useState(String(safePage));

  useEffect(() => {
    setPageInput(String(safePage));
  }, [safePage]);

  const pages = useMemo(() => {
    const result: (number | "...")[] = [];

    const totalVisiblePages = siblingCount * 2 + 5;

    if (totalPages <= totalVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        result.push(i);
      }

      return result;
    }

    const leftSibling = Math.max(safePage - siblingCount, 1);
    const rightSibling = Math.min(safePage + siblingCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    if (!showLeftDots) {
      for (let i = 1; i <= siblingCount * 2 + 3; i++) {
        result.push(i);
      }

      result.push("...");
      result.push(totalPages);

      return result;
    }

    if (!showRightDots) {
      result.push(1);
      result.push("...");

      for (let i = totalPages - (siblingCount * 2 + 2); i <= totalPages; i++) {
        result.push(i);
      }

      return result;
    }

    result.push(1);
    result.push("...");

    for (let i = leftSibling; i <= rightSibling; i++) {
      result.push(i);
    }

    result.push("...");
    result.push(totalPages);

    return result;
  }, [safePage, totalPages, siblingCount]);

  const handlePageChange = (newPage: number) => {
    if (isDisabled) return;
    const validPage = Math.min(Math.max(newPage, 1), totalPages);
    if (validPage === safePage) return;
    onPageChange(validPage);
  };

  const handlePrevious = () => {
    handlePageChange(safePage - 1);
  };

  const handleNext = () => {
    handlePageChange(safePage + 1);
  };

  const handlePageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setPageInput(value);
    }
  };

  const goToEnteredPage = () => {
    if (isDisabled) return;
    const enteredPage = Number(pageInput);

    if (!pageInput || Number.isNaN(enteredPage)) {
      setPageInput(String(safePage));
      return;
    }

    handlePageChange(enteredPage);
  };

  const handlePageInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      goToEnteredPage();
    }
  };

  const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (isDisabled || !onLimitChange) return;

    const newLimit = Number(event.target.value);

    if (!Number.isFinite(newLimit) || newLimit <= 0) {
      return;
    }

    onLimitChange(newLimit);

    if (safePage !== 1) {
      onPageChange(1);
    }
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange?.(event.target.value);
  };

  useEffect(() => {
    if (page !== safePage && !isDisabled) {
      onPageChange(safePage);
    }
  }, [page, safePage, isDisabled, onPageChange]);

  const startItem = total === 0 ? 0 : (safePage - 1) * limit + 1;
  const endItem = total === 0 ? 0 : Math.min(safePage * limit, total);

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-4 ${wrapperClassName}`}
    >
      {/* Query */}
      {onQueryChange && (
        <input
          type="search"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search..."
          disabled={isDisabled}
          className={`rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#4F46E5] ${inputClassName}`}
        />
      )}

      {/* Result information */}
      <span className={`text-sm text-gray-600 ${textClassName}`}>
        Showing {startItem}–{endItem} of {total}
      </span>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          type="button"
          onClick={handlePrevious}
          disabled={isDisabled || safePage === 1}
          aria-label="Previous page"
          className={`flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 transition
            ${
              isDisabled || safePage === 1
                ? "cursor-not-allowed opacity-40"
                : "cursor-pointer hover:bg-gray-100"
            }
            ${buttonClassName}`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Page numbers */}
        {pages?.map((item, index) =>
          item === "..." ? (
            <span
              key={`dots-${index}`}
              className="flex h-9 w-9 items-center justify-center text-gray-500"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => handlePageChange(item)}
              disabled={isDisabled}
              aria-current={item === safePage ? "page" : undefined}
              className={`flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 text-sm transition
                ${
                  item === safePage
                    ? `bg-[#4F46E5] text-white ${activeButtonClassName}`
                    : "border-gray-300 hover:bg-gray-100"
                }
                ${buttonClassName}
                ${
                  isDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
            >
              {item}
            </button>
          ),
        )}

        {/* Next */}
        <button
          type="button"
          onClick={handleNext}
          disabled={isDisabled || safePage === totalPages}
          aria-label="Next page"
          className={`flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 transition
            ${
              isDisabled || safePage === totalPages
                ? "cursor-not-allowed opacity-40"
                : "cursor-pointer hover:bg-gray-100"
            }
            ${buttonClassName}`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Go to page */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Go to</span>

        <input
          type="text"
          inputMode="numeric"
          value={pageInput}
          onChange={handlePageInputChange}
          onKeyDown={handlePageInputKeyDown}
          disabled={isDisabled}
          aria-label="Go to page"
          className={`h-9 w-16 rounded-lg border border-gray-300 px-2 text-center outline-none focus:border-[#4F46E5] ${inputClassName}`}
        />

        <button
          type="button"
          onClick={goToEnteredPage}
          disabled={isDisabled}
          className={`h-9 rounded-lg bg-[#4F46E5] px-3 text-sm text-white transition hover:bg-[#4338CA]
            ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
            ${buttonClassName}`}
        >
          Go
        </button>
      </div>

      {/* Page size */}
      {onLimitChange && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Rows:</span>

          <select
            value={limit}
            onChange={handleLimitChange}
            disabled={isDisabled}
            className={`h-9 rounded-lg border border-gray-300 px-2 outline-none focus:border-[#4F46E5] ${selectClassName}`}
          >
            {limitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Pagination;
