import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import TopNav from './components/TopNav';


function App() {
  return (
    <div className="app">
      <TopNav />
      <AppNav />
      <AppRoutes />
    </div>
  );
}

export default App;
