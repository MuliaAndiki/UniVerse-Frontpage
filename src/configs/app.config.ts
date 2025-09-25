import React from 'react';

interface AppConfig {
  name: string;
  description: string;
  logo: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    image: string;
  };
  socialMedia: {
    twitter: { url: string; icon: string };
    instagram: { url: string; icon: string };
    linkedin: { url: string; icon: string };
    youtube: { url: string; icon: string };
    tiktok: { url: string; icon: string };
  };
  params: {
    navigation: {
      home: { title: string; param: string };
      aboutUs: { title: string; param: string };
      service: { title: string; param: string };
      resume: { title: string; param: string };
      project: { title: string; param: string };
    };
    contact: {
      email: string;
      phone: string;
      portfolio: string;
    };
  };
}

export const appConfig: AppConfig = {
  name: 'App',
  description: 'App',
  logo: '/images/logo.png',
  metadata: {
    title: 'App',
    description: 'App',
    keywords: ['App'],
    author: 'App',
    image: '/images/logo.png',
  },
  socialMedia: {
    twitter: { url: 'https://twitter.com/app', icon: 'hugeicons:new-twitter-rectangle' },
    instagram: { url: 'https://instagram.com/app', icon: 'basil:instagram-outline' },
    linkedin: { url: 'https://linkedin.com/app', icon: 'tabler:brand-linkedin' },
    youtube: { url: 'https://youtube.com/app', icon: 'mingcute:youtube-line' },
    tiktok: { url: 'https://tiktok.com/app', icon: 'hugeicons:tiktok' },
  },
  params: {
    navigation: {
      home: { title: 'Home', param: '#' },
      aboutUs: { title: 'About', param: '#' },
      project: { title: 'Project', param: '#' },
      resume: { title: 'Resume', param: '#' },
      service: { title: 'Service', param: '#' },
    },
    contact: {
      email: 'universe@gmail.com',
      phone: '082222222',
      portfolio: '',
    },
  },
};

interface NavigationMenuConfig {
  items: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    description?: string;
    children?: NavigationMenuConfig['items'];
  }[];
}

export const navigationMenuConfig: NavigationMenuConfig = {
  items: [
    { title: 'Kategori', href: '/', description: 'Home' },
    { title: 'Tentang', href: '/kelas', description: 'Kelas' },
    { title: 'Kontak', href: '/kelas', description: 'Kelas' },
  ],
};
