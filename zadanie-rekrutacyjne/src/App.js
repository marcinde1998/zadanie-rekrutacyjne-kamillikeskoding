import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import TopNav from './components/TopNav';
// import Test from './components/Test'


function App() {
  return (
    <div className="app">
      <TopNav />
      <AppNav />
      <AppRoutes />
      {/* <Test /> */}
    </div>
  );
}

export default App;
