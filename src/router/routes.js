const routes = [
  // redirect utama ke login
  {
    path: '/',
    redirect: '/login',
  },

  // halaman login
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/Login/LoginPage.vue') }],
  },

  // halaman signup
  {
    path: '/signup',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/Login/SignUpPage.vue') }],
  },

  // MAIN LAYOUT setelah login
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // halaman default /app → BillingReports
      { path: '', component: () => import('pages/DashboardPage.vue') },
      { path: 'billingreports', component: () => import('pages/BillingReportsPage.vue') },
      { path: 'transactions', component: () => import('pages/TransactionsPage.vue') },
      { path: 'budget', component: () => import('pages/BudgetPage.vue') },
      { path: 'settings', component: () => import('pages/SettingsPage.vue') },
    ],
  },

  // 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
