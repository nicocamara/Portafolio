import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './main.scss';
import { StateProvider } from './utils/stateContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StateProvider>
    <Router>
      <App />
    </Router>
  </StateProvider>
);
