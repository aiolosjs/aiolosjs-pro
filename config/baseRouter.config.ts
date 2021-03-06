export const UserRouter = [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    type: 'base',
    routes: [
      { path: '/user', redirect: '/user/login' },
      {
        name: 'login',
        path: '/user/login',
        menuType: 2,
        component: './user/login',
      },
    ],
  },
];
export const AppRouter = [
  {
    name: '权限管理',
    icon: 'setting',
    path: '/permission',
    menuType: 1,
    type: 'base',
    routes: [
      {
        name: '菜单管理',
        path: '/permission/menumanage',
        menuType: 2,
        component: './Sys/Auth/MenuManage/route',
      },
      {
        name: '客户管理',
        path: '/permission/custommanage',
        menuType: 2,
        component: './Sys/Auth/CustomManage/route',
      },
      {
        name: '角色管理',
        path: '/permission/rolemanage',
        menuType: 2,
        component: './Sys/Auth/RoleManage/route',
      },
      {
        name: '账号管理',
        path: '/permission/accountmanage',
        menuType: 2,
        component: './Sys/Auth/AccountManage/route',
      },
      {
        component: './Sys/Exception/404',
        type: 'base',
      },
    ],
  },
  {
    name: '用户设置',
    path: '/account/settings',
    menuType: 2,
    component: './user/settings',
    hideInMenu: true,
  },
  {
    name: '异常页',
    icon: 'warning',
    path: '/exception',
    hideInMenu: true,
    type: 'base',
    routes: [
      // exception
      {
        path: '/exception/403',
        name: '403',
        component: './Sys/Exception/403',
        menuType: 2,
      },
      {
        path: '/exception/404',
        name: '404',
        component: './Sys/Exception/404',
        menuType: 2,
      },
      {
        path: '/exception/500',
        name: '500',
        component: './Sys/Exception/500',
        menuType: 2,
      },
    ],
  },

  {
    component: './Sys/Exception/404',
    type: 'base',
  },
];
