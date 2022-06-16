import { createStore } from 'vuex';

const files = import.meta.globEager('./modules/*.ts');
const modules: any = {};

for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    let name = key.replace(/(\.\/|\.ts)/g, '');
    modules[name] = files[key];
  }
}

// Create a new store instance.
export default createStore({
  modules
});