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
      grid: {
        label: 'Grid',
        href: '/layout/grid',
      },
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
      select: {
        label: 'Select',
        href: '/dataEntry/select',
      },
      switch: {
        label: 'Switch',
        href: '/dataEntry/switch',
      },
      datePicker: {
        label: 'DatePicker',
        href: '/dataEntry/datePicker',
      },
    },
  },
  dataDisplay: {
    label: 'Data Display',
    href: '/dataDisplay',
    subMenu: {
      tag: {
        label: 'Tag',
        href: '/dataDisplay/tag',
      },
    },
  },
  feedback: {
    label: 'Feedback',
    href: '/feedback',
    subMenu: {
      toast: {
        label: 'Toast',
        href: '/feedback/toast',
      },
      modal: {
        label: 'Modal',
        href: '/feedback/modal',
      },
    },
  },
};

export default routes;
