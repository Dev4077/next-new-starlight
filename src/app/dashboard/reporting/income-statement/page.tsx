import AccountsPayable from '@/features/reporting/accountsPayable/AccountsPayable';
import IncomeStatement from '@/features/reporting/incomeStatement/IncomeStatement';

export const metadata = {
  title: 'Dashboard : Income Statement view'
};

export default function page() {
  return <IncomeStatement />;
}
