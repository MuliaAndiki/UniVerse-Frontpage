interface ColorConfig {
  background: string;
  foreground: string;
}

interface ShapeConfig {
  parent: string;
  child: string;
}

interface CardConfig {
  parent: string;
  child: string;
  tree: string;
}

interface ThemeConfig {
  light: {
    background: string;
    foreground: string;
    card: ColorConfig;
    popover: ColorConfig;
    primary: ColorConfig;
    secondary: ColorConfig;
    muted: ColorConfig;
    accent: ColorConfig;
    destructive: ColorConfig;
    warning: ColorConfig;
    success: ColorConfig;
    info: ColorConfig;
    border: string;
    input: string;
    ring: string;
    shape: ShapeConfig;
    case: CardConfig;
  };
  dark: {
    background: string;
    foreground: string;
    card: ColorConfig;
    popover: ColorConfig;
    primary: ColorConfig;
    secondary: ColorConfig;
    muted: ColorConfig;
    accent: ColorConfig;
    destructive: ColorConfig;
    warning: ColorConfig;
    success: ColorConfig;
    info: ColorConfig;
    border: string;
    input: string;
    ring: string;
    shape: ShapeConfig;
    case: CardConfig;
  };
}

export const themeConfig: ThemeConfig = {
  light: {
    background: '#F8F9EB',
    foreground: '#911DEC',
    card: {
      background: '#FFFFFF',
      foreground: '#911DEC',
    },
    popover: {
      background: '#FFFFFF',
      foreground: '#911DEC',
    },
    primary: {
      background: '#911DEC',
      foreground: '#F5EAFF',
    },
    secondary: {
      background: '#F5EAFF',
      foreground: '#911DEC',
    },
    muted: {
      background: '#F5EAFF',
      foreground: 'rgba(145, 29, 236, 0.6)',
    },
    accent: {
      background: '#F5EAFF',
      foreground: '#911DEC',
    },
    destructive: {
      background: '#FA0C00',
      foreground: '#FFFFFF',
    },
    warning: {
      background: '#FECA13',
      foreground: '#FECA1322',
    },
    success: {
      background: '#28DE25',
      foreground: '#28DE2522',
    },
    info: {
      background: '#04B4FC',
      foreground: '#04B4FC22',
    },
    shape: {
      parent: '#003D21',
      child: '',
    },
    case: {
      parent: '#EAD1AC',
      child: '#507968',
      tree: '#FBE87F',
    },
    border: 'rgba(145, 29, 236, 0.2)',
    input: 'rgba(145, 29, 236, 0.2)',
    ring: 'rgba(145, 29, 236, 0.3)',
  },
  dark: {
    background: '#1A1A1A',
    foreground: '#F5EAFF',
    card: {
      background: '#2A2A2A',
      foreground: '#F5EAFF',
    },
    popover: {
      background: '#2A2A2A',
      foreground: '#F5EAFF',
    },
    primary: {
      background: '#911DEC',
      foreground: '#F5EAFF',
    },
    secondary: {
      background: '#2A2A2A',
      foreground: '#F5EAFF',
    },
    muted: {
      background: '#2A2A2A',
      foreground: 'rgba(245, 234, 255, 0.6)',
    },
    accent: {
      background: '#2A2A2A',
      foreground: '#F5EAFF',
    },
    destructive: {
      background: '#FA0C00',
      foreground: '#F5EAFF',
    },
    warning: {
      background: '#FECA13',
      foreground: '#FECA1322',
    },
    success: {
      background: '#28DE25',
      foreground: '#28DE2522',
    },
    info: {
      background: '#04B4FC',
      foreground: '#04B4FC22',
    },
    shape: {
      parent: '',
      child: '',
    },
    case: {
      parent: '',
      child: '',
      tree: '',
    },
    border: 'rgba(245, 234, 255, 0.1)',
    input: 'rgba(245, 234, 255, 0.15)',
    ring: 'rgba(245, 234, 255, 0.3)',
  },
};
