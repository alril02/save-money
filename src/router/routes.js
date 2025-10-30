const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') },
      { path: 'squad', component: () => import('pages/SquadPage.vue') },
      { path: 'messenger', component: () => import('pages/MessengerPage.vue') },
      { path: 'statistic', component: () => import('pages/StatisticPage.vue') },
      { path: 'calendar', component: () => import('pages/CalendarPage.vue') },
      { path: 'finance', component: () => import('pages/FinancePage.vue') },
    ],
  },

  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/Login/LoginPage.vue') }],
  },

  {
    path: '/signup',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/Login/SignUpPage.vue') }],
  },

  // Halaman Error 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
