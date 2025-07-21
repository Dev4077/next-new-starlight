import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

type DataTablePaginationProps = {
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
  total: number;
};

export function DataTablePagination2({
  page,
  setPage,
  pageSize,
  setPageSize,
  total
}: DataTablePaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages: (number | string)[] = [];

  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 2) pages.push('...');
    if (page !== 1 && page !== totalPages) pages.push(page);
    if (page < totalPages - 1) pages.push('...');
    pages.push(totalPages);
  }

  return (
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          href='#'
          size='sm'
          className='text-xs'
          onClick={(e) => {
            e.preventDefault();
            if (page > 1) setPage(page - 1);
          }}
          aria-disabled={page === 1}
          tabIndex={page === 1 ? -1 : 0}
        />
      </PaginationItem>
      {pages.map((p, idx) =>
        typeof p === 'number' ? (
          <PaginationItem key={p}>
            <PaginationLink
              href='#'
              size='sm'
              className={`text-xs${page === p ? 'font-semibold' : ''}`}
              isActive={page === p}
              onClick={(e) => {
                e.preventDefault();
                setPage(p);
              }}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem key={`ellipsis-${idx}`}>
            <PaginationEllipsis className='text-xs' />
          </PaginationItem>
        )
      )}
      <PaginationItem>
        <PaginationNext
          href='#'
          size='sm'
          className='text-xs'
          onClick={(e) => {
            e.preventDefault();
            if (page < totalPages) setPage(page + 1);
          }}
          aria-disabled={page >= totalPages}
          tabIndex={page >= totalPages ? -1 : 0}
        />
      </PaginationItem>
      <div className='ml-2'>
        <select
          className='rounded border px-1 py-1 text-xs'
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 20].map((n) => (
            <option className='text-xs' key={n} value={n}>
              {n} / page
            </option>
          ))}
        </select>
      </div>
    </PaginationContent>
  );
}
