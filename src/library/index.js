import Buttons from './components/Buttons';
import Card from './components/Card';
import Chip from './components/Chip';
import Core from './components/Core';
import Dialogs from './components/Dialogs';
import Layout from './components/Layout';
import Lists from './components/List';
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';

const options = {
  Buttons,
  Card,
  Chip,
  Core,
  Dialogs,
  Layout,
  Lists,
  Menu,
  Navigation,
  Toolbar,
};

options.install = (Vue) => {
  for (const component in options) {
    const componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }
};

export default options;