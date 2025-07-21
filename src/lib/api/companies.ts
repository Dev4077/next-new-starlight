import { API_BASE_URL } from '@/lib/config';
export interface GetCompaniesParams {
  page: number;
  pageSize: number;
  sorting?: { id: string; desc?: boolean }[];
}

export async function fetchCompanies({
  page,
  pageSize,
  sorting
}: GetCompaniesParams) {
  const token = localStorage.getItem('token');
  console.log('------------', API_BASE_URL);
  let url = `${API_BASE_URL}/api/users/companies/all?page=${page}&pageSize=${pageSize}`;
  if (sorting && sorting.length) {
    const sortKey = sorting[0].id;
    const sortOrder = sorting[0].desc ? 'desc' : 'asc';
    url += `&sortOrder=${sortOrder}&sortKey=${sortKey}`;
  }
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch companies');
  return res.json();
}
