
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css'
import Layout from './layout';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Layout>
      <AppRoutes />
    </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;