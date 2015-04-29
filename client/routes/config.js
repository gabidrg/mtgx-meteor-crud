// Basic configuration for all routes

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});
