// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBHU8rwZ2e20EKgN4AKX1cpYlYvvL2Dfa0',
    authDomain: 'fir-1acfd.firebaseapp.com',
    databaseURL: 'https://fir-1acfd.firebaseio.com/',
    storageBucket: 'fir-1acfd.appspot.com'
  }
};
