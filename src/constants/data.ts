import { NavItem } from '@/types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items
  },
  {
    title: 'Product',
    url: '/dashboard/product',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: []
  },
  {
    title: 'Banking',
    url: '#',
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'All Accounts',
        url: '/dashboard/banking/all-account',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Bank Accounts',
        shortcut: ['l', 'l'],
        url: '/dashboard/banking/bank-account',
        icon: 'login'
      },
      {
        title: 'Credit Cards',
        shortcut: ['l', 'l'],
        url: '/dashboard/banking/credit-cards',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Sales',
    url: '#',
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Invoices',
        url: '/dashboard/sales/invoices',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Customers',
        shortcut: ['l', 'l'],
        url: '/dashboard/sales/customers',
        icon: 'login'
      },
      {
        title: 'Products & Services',
        shortcut: ['l', 'l'],
        url: '/dashboard/sales/product-services',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Purchases',
    url: '#',
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Bills',
        url: '/dashboard/purchases/bills',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Vendors',
        shortcut: ['l', 'l'],
        url: '/dashboard/purchases/vendors',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Accounting',
    url: '#',
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Entities',
        url: '/accounting/entities',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Chart of Accounts',
        url: '/dashboard/accounting/chart-of-accounts',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Account Transactions',
        shortcut: ['l', 'l'],
        url: '/dashboard/accounting/account-transactions',
        icon: 'login'
      },
      {
        title: 'Journal Entry',
        shortcut: ['l', 'l'],
        url: '/dashboard/accounting/journal-entry',
        icon: 'login'
      },
      {
        title: 'Reconciliation',
        shortcut: ['l', 'l'],
        url: '/dashboard/accounting/reconciliation',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Reporting',
    url: '#',
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Balance Sheet',
        url: '/dashboard/reporting/balance-sheet',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Income Statement',
        shortcut: ['l', 'l'],
        url: '/dashboard/reporting/income-statement',
        icon: 'login'
      },
      {
        title: 'Accounts Payable Aging',
        shortcut: ['l', 'l'],
        url: '/dashboard/reporting/accounts-payable',
        icon: 'login'
      },
      {
        title: 'Accounts Receivable Aging',
        shortcut: ['l', 'l'],
        url: '/dashboard/reporting/accounts-receivable',
        icon: 'login'
      },
      {
        title: 'Advanced Reporting ',
        shortcut: ['l', 'l'],
        url: '/dashboard/reporting/advanced-reporting',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Quick Add Button',
    url: '#',
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Add an Invoice',
        url: '/dashboard/quick-add/invoices',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Add a Bill',
        shortcut: ['l', 'l'],
        url: '/dashboard/quick-add/bills',
        icon: 'login'
      },
      {
        title: 'Deposits',
        shortcut: ['l', 'l'],
        url: '/dashboard/quick-add/deposits',
        icon: 'login'
      },
      {
        title: 'Payments',
        shortcut: ['l', 'l'],
        url: '/dashboard/quick-add/payments',
        icon: 'login'
      },
      {
        title: 'Transfer',
        shortcut: ['l', 'l'],
        url: '/dashboard/quick-add/transfer',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: []
  },
  {
    title: 'Account',
    url: '#',
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Login',
        shortcut: ['l', 'l'],
        url: '/',
        icon: 'login'
      }
    ]
  }
];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }
];
