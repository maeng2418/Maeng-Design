export interface Route {
  label: string;
  href: string;
  subMenu?: Routes;
}

export interface Routes {
  [key: string]: Route;
}

const routes: Routes = {
  general: {
    label: 'General',
    href: '/general',
    subMenu: {
      color: {
        label: 'Colors',
        href: '/general/colors',
      },
      button: {
        label: 'Button',
        href: '/general/button',
      },
      typography: {
        label: 'Typography',
        href: '/general/typography',
      },
    },
  },
  layout: {
    label: 'Layout',
    href: '/layout',
    subMenu: {
      divider: {
        label: 'Divider',
        href: '/layout/divider',
      },
    },
  },
  navigation: {
    label: 'Navigation',
    href: '/navigation',
    subMenu: {
      home: {
        label: 'Menu',
        href: '/navigation/menu',
      },
    },
  },
  dataEntry: {
    label: 'Data Entry',
    href: '/dataEntry',
    subMenu: {
      input: {
        label: 'Input',
        href: '/dataEntry/input',
      },
    },
  },
  feedback: {
    label: 'Feedback',
    href: '/feedback',
    subMenu: {
      message: {
        label: 'Message',
        href: '/feedback/message',
      },
      modal: {
        label: 'Modal',
        href: '/feedback/modal',
      },
    },
  },
};

export default routes;
