module.exports = {
    apps: [
      {
        name: 'NuxtAppName',
        exec_mode: 'cluster',
        port: 3002,
        instances: 'max',
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
      },
    ],
  }