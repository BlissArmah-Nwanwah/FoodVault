
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Layout from './layout';
import ProductsPage from './pages/products';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <AppRoutes />
    </Layout>
    </BrowserRouter>
  );
}

export default App;