/* eslint-disable */
/* prettier-ignore */
import * as React from 'react';

import { IPlaceholderIconProps, TPlaceholderMood } from '../UI/Placeholder/types';

export function DashboardPlaceholderIcon({ mood }: IPlaceholderIconProps) {
  const iconsMoodMap: { [key in TPlaceholderMood]: React.ReactNode } = {
    good: (
      <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="108" height="93" rx="12" fill="white" />
        <path d="M40.5 60C42.9853 60 45 57.9853 45 55.5C45 53.0147 42.9853 51 40.5 51C38.0147 51 36 53.0147 36 55.5C36 57.9853 38.0147 60 40.5 60Z" fill="#B9B9B8" />
        <path d="M84 55.5C84 57.9853 81.9853 60 79.5 60C77.0147 60 75 57.9853 75 55.5C75 53.0147 77.0147 51 79.5 51C81.9853 51 84 53.0147 84 55.5Z" fill="#B9B9B8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18 6C11.3726 6 6 11.3726 6 18V87C6 93.6274 11.3726 99 18 99H102C108.627 99 114 93.6274 114 87V18C114 11.3726 108.627 6 102 6H18ZM102 12H18C14.6863 12 12 14.6863 12 18V27H108V18C108 14.6863 105.314 12 102 12ZM12 87V33H108V87C108 90.3137 105.314 93 102 93H18C14.6863 93 12 90.3137 12 87Z" fill="#B9B9B8" />
        <path d="M45 69C45 67.3431 46.3431 66 48 66H72C73.6569 66 75 67.3431 75 69C75 70.6569 73.6569 72 72 72H48C46.3431 72 45 70.6569 45 69Z" fill="#B9B9B8" />
        <path d="M21 19.5C21 20.3284 20.3284 21 19.5 21C18.6716 21 18 20.3284 18 19.5C18 18.6716 18.6716 18 19.5 18C20.3284 18 21 18.6716 21 19.5Z" fill="#DCDCDB" />
        <path d="M27 19.5C27 20.3284 26.3284 21 25.5 21C24.6716 21 24 20.3284 24 19.5C24 18.6716 24.6716 18 25.5 18C26.3284 18 27 18.6716 27 19.5Z" fill="#DCDCDB" />
        <path d="M33 19.5C33 20.3284 32.3284 21 31.5 21C30.6716 21 30 20.3284 30 19.5C30 18.6716 30.6716 18 31.5 18C32.3284 18 33 18.6716 33 19.5Z" fill="#DCDCDB" />
        <path d="M90 114C90 115.657 76.5685 117 60 117C43.4315 117 30 115.657 30 114C30 112.343 43.4315 111 60 111C76.5685 111 90 112.343 90 114Z" fill="#DCDCDB" />
      </svg>
    ),
    bad: (
      <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="108" height="93" rx="12" fill="white" />
        <path d="M40.5 60C42.9853 60 45 57.9853 45 55.5C45 53.0147 42.9853 51 40.5 51C38.0147 51 36 53.0147 36 55.5C36 57.9853 38.0147 60 40.5 60Z" fill="#B9B9B8" />
        <path d="M84 55.5C84 57.9853 81.9853 60 79.5 60C77.0147 60 75 57.9853 75 55.5C75 53.0147 77.0147 51 79.5 51C81.9853 51 84 53.0147 84 55.5Z" fill="#B9B9B8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18 6C11.3726 6 6 11.3726 6 18V87C6 93.6274 11.3726 99 18 99H102C108.627 99 114 93.6274 114 87V18C114 11.3726 108.627 6 102 6H18ZM102 12H18C14.6863 12 12 14.6863 12 18V27H108V18C108 14.6863 105.314 12 102 12ZM12 87V33H108V87C108 90.3137 105.314 93 102 93H18C14.6863 93 12 90.3137 12 87Z" fill="#B9B9B8" />
        <path d="M51 75C51 73.6707 51.7114 72.2385 53.3147 71.036C54.9189 69.8329 57.2726 69 60 69C62.7274 69 65.0811 69.8329 66.6853 71.036C68.2886 72.2385 69 73.6707 69 75C69 76.6569 70.3431 78 72 78C73.6569 78 75 76.6569 75 75C75 71.3587 73.0251 68.2909 70.2853 66.236C67.5464 64.1818 63.9001 63 60 63C56.0999 63 52.4536 64.1818 49.7147 66.236C46.9749 68.2909 45 71.3587 45 75C45 76.6569 46.3431 78 48 78C49.6569 78 51 76.6569 51 75Z" fill="#B9B9B8" />
        <path d="M21 19.5C21 20.3284 20.3284 21 19.5 21C18.6716 21 18 20.3284 18 19.5C18 18.6716 18.6716 18 19.5 18C20.3284 18 21 18.6716 21 19.5Z" fill="#DCDCDB" />
        <path d="M27 19.5C27 20.3284 26.3284 21 25.5 21C24.6716 21 24 20.3284 24 19.5C24 18.6716 24.6716 18 25.5 18C26.3284 18 27 18.6716 27 19.5Z" fill="#DCDCDB" />
        <path d="M33 19.5C33 20.3284 32.3284 21 31.5 21C30.6716 21 30 20.3284 30 19.5C30 18.6716 30.6716 18 31.5 18C32.3284 18 33 18.6716 33 19.5Z" fill="#DCDCDB" />
        <path d="M90 114C90 115.657 76.5685 117 60 117C43.4315 117 30 115.657 30 114C30 112.343 43.4315 111 60 111C76.5685 111 90 112.343 90 114Z" fill="#DCDCDB" />
      </svg>
    ),
    neutral: (
      <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="108" height="93" rx="12" fill="white" />
        <path d="M40.5 60C42.9853 60 45 57.9853 45 55.5C45 53.0147 42.9853 51 40.5 51C38.0147 51 36 53.0147 36 55.5C36 57.9853 38.0147 60 40.5 60Z" fill="#B9B9B8" />
        <path d="M84 55.5C84 57.9853 81.9853 60 79.5 60C77.0147 60 75 57.9853 75 55.5C75 53.0147 77.0147 51 79.5 51C81.9853 51 84 53.0147 84 55.5Z" fill="#B9B9B8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18 6C11.3726 6 6 11.3726 6 18V87C6 93.6274 11.3726 99 18 99H102C108.627 99 114 93.6274 114 87V18C114 11.3726 108.627 6 102 6H18ZM102 12H18C14.6863 12 12 14.6863 12 18V27H108V18C108 14.6863 105.314 12 102 12ZM12 87V33H108V87C108 90.3137 105.314 93 102 93H18C14.6863 93 12 90.3137 12 87Z" fill="#B9B9B8" />
        <path d="M45 69C45 67.3431 46.3431 66 48 66H72C73.6569 66 75 67.3431 75 69C75 70.6569 73.6569 72 72 72H48C46.3431 72 45 70.6569 45 69Z" fill="#B9B9B8" />
        <path d="M21 19.5C21 20.3284 20.3284 21 19.5 21C18.6716 21 18 20.3284 18 19.5C18 18.6716 18.6716 18 19.5 18C20.3284 18 21 18.6716 21 19.5Z" fill="#DCDCDB" />
        <path d="M27 19.5C27 20.3284 26.3284 21 25.5 21C24.6716 21 24 20.3284 24 19.5C24 18.6716 24.6716 18 25.5 18C26.3284 18 27 18.6716 27 19.5Z" fill="#DCDCDB" />
        <path d="M33 19.5C33 20.3284 32.3284 21 31.5 21C30.6716 21 30 20.3284 30 19.5C30 18.6716 30.6716 18 31.5 18C32.3284 18 33 18.6716 33 19.5Z" fill="#DCDCDB" />
        <path d="M90 114C90 115.657 76.5685 117 60 117C43.4315 117 30 115.657 30 114C30 112.343 43.4315 111 60 111C76.5685 111 90 112.343 90 114Z" fill="#DCDCDB" />
      </svg>
    ),
  };

  return <>{iconsMoodMap[mood]}</>;
}
