'use client';

import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  VisibilityState
} from '@tanstack/react-table';
import {
  IconChevronDown,
  IconChevronUp,
  IconCheck,
  IconEyeOff
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import { DataTablePagination2 } from '@/components/ui/table/data-table-pagination-2';
import { fetchCompanies } from '@/lib/api/companies'; // adjust the import path

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
interface Company {
  id: number;
  name: string;
  defaultCountry: string;
  operatingCountry: string;
  firstFiscalMonth: string;
  firstTaxMonth: string;
  startDate: string;
  endDate: string;
  status: string;
  uniqueId: string;
  taxId: string;
  createdBy: number;
  createdAt: string;
  updatedBy: number;
  updatedAt: string;
}

export default function EntitiesPage() {
  const [data, setData] = React.useState<Company[]>([]);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [total, setTotal] = React.useState(0);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const columns = React.useMemo<ColumnDef<Company>[]>(
    () => [
      {
        accessorKey: 'name',
        header: () => 'Name',
        cell: (info) => <span>{info.getValue() as string}</span>,
        enableSorting: true
      },
      {
        accessorKey: 'defaultCountry',
        header: () => 'Default Country',
        cell: (info) => <span>{info.getValue() as string}</span>,
        enableSorting: true
      },
      {
        accessorKey: 'operatingCountry',
        header: () => 'Operating Country',
        cell: (info) => <span>{info.getValue() as string}</span>,
        enableSorting: true
      },
      {
        accessorKey: 'firstFiscalMonth',
        header: () => 'First Fiscal Month',
        cell: (info) => <span>{info.getValue() as string}</span>,
        enableSorting: false
      },
      {
        accessorKey: 'firstTaxMonth',
        header: () => 'First Tax Month',
        cell: (info) => <span>{info.getValue() as string}</span>,
        enableSorting: false
      },
      {
        accessorKey: 'startDate',
        header: () => 'Start Date',
        cell: (info) => (
          <span>
            {new Date(info.getValue() as string).toLocaleDateString()}
          </span>
        ),
        enableSorting: true
      },
      {
        accessorKey: 'endDate',
        header: () => 'End Date',
        cell: (info) => (
          <span>
            {new Date(info.getValue() as string).toLocaleDateString()}
          </span>
        ),
        enableSorting: true
      },
      {
        accessorKey: 'status',
        header: () => 'Status',
        cell: (info) => <span>{info.getValue() as string}</span>,
        enableSorting: true
      }
    ],
    []
  );

  React.useEffect(() => {
    setLoading(true);
    fetchCompanies({ page, pageSize, sorting })
      .then((res) => {
        setData(res?.data ?? []);
        setTotal(res?.pagination?.total ?? 0);
      })
      .catch(() => {
        setData([]);
        setTotal(0);
      })
      .finally(() => setLoading(false));
  }, [page, pageSize, sorting]);
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    manualSorting: true,
    pageCount: Math.ceil(total / pageSize),
    state: {
      sorting,
      columnVisibility
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  function ColumnsDropdown() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>
            <IconCheck className='h-4 w-4' />
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-48 p-2'>
          {table
            .getAllColumns()
            .filter((col) => col.getCanHide())
            .map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(v) => column.toggleVisibility(!!v)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Pagination rendering like: 1, 2, ... 4 Next
  // Adapts for more pages as well
  // function Pagination() {
  //   const totalPages = Math.ceil(total / pageSize);
  //   // Show up to first page, current page, last page, and next
  //   const pages = [];
  //   if (totalPages <= 4) {
  //     for (let i = 1; i <= totalPages; i++) pages.push(i);
  //   } else {
  //     pages.push(1);
  //     if (page > 2) {
  //       pages.push('...');
  //     }
  //     if (page !== 1 && page !== totalPages) {
  //       pages.push(page);
  //     }
  //     if (page < totalPages - 1) {
  //       pages.push('...');
  //     }
  //     pages.push(totalPages);
  //   }
  //   return (
  //     <div className="flex items-center gap-2">
  //       {pages.map((p, idx) =>
  //         typeof p === "number" ? (
  //           <Button
  //             key={p}
  //             size="icon"
  //             className='text-xs'
  //             variant={page === p ? "secondary" : "outline"}
  //             onClick={() => setPage(p)}
  //           >
  //             {p}
  //           </Button>
  //         ) : (
  //           <span key={"ellipsis-" + idx} style={{ minWidth: 20, textAlign: "center" }}>
  //             {p}
  //           </span>
  //         )
  //       )}
  //       <Button
  //         size="sm"
  //         variant="outline"
  //         className='text-xs'
  //         disabled={page >= totalPages}
  //         onClick={() => setPage(page + 1)}
  //       >Next</Button>
  //       <select
  //         className="border rounded px-1 py-1 ml-2 text-xs"
  //         value={pageSize}
  //         onChange={e => setPageSize(Number(e.target.value))}
  //       >
  //         {[5, 10, 20].map(n => (
  //           <option className='text-xs' key={n} value={n}>{n} / page</option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  // }

  return (
    <PageContainer scrollable={true}>
      <div className='mb-4 flex flex-1 flex-col space-y-7'>
        <div className='flex items-start justify-between'>
          <Heading title='Entities' description='Manage company entities' />
          <Link
            href='/dashboard/entities/new'
            className={cn('inline-flex items-center text-xs md:text-xs')}
          >
            <IconPlus className='mr-2 h-4 w-4' />
            Add New
          </Link>
        </div>
        <Separator />

        {loading ? (
          <DataTableSkeleton columnCount={5} rowCount={5} filterCount={2} />
        ) : (
          <div>
            <div className='mb-2 flex flex-wrap gap-2'>
              <Input
                placeholder='Search titles...'
                className='w-64'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ColumnsDropdown />
            </div>
            {/* Table with x-scroll */}
            <div
              className='overflow-auto rounded border text-xs'
              style={{ maxWidth: '100vw' }}
            >
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          style={{
                            cursor: header.column.getCanSort()
                              ? 'pointer'
                              : undefined
                          }}
                          onClick={
                            header.column.getCanSort()
                              ? header.column.getToggleSortingHandler()
                              : undefined
                          }
                        >
                          <div className='flex items-center gap-1'>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {header.column.getCanSort() && (
                              <>
                                {header.column.getIsSorted() === 'desc' && (
                                  <IconChevronDown className='h-4 w-4' />
                                )}
                                {header.column.getIsSorted() === 'asc' && (
                                  <IconChevronUp className='h-4 w-4' />
                                )}
                              </>
                            )}
                          </div>
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className='text-center'
                      >
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : table.getRowModel().rows.length > 0 ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className='text-center'
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            {/* Pagination row */}
            <div className='mt-4 flex justify-between'>
              <div className='text-xs'>
                Showing {Math.min((page - 1) * pageSize + 1, total)}-
                {Math.min(page * pageSize, total)} of {total}
              </div>
              {/* <Pagination /> */}
              <DataTablePagination2
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                total={total}
              />
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
