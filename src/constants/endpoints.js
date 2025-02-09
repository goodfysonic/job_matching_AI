export const ENDPOINTS = {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
    },
    JOBS: {
      LIST: '/jobs',
      DETAIL: (id) => `/jobs/${id}`,
    },
  }