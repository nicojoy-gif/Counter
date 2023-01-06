import './styles/App.css';
import Counter from './components/customCounter';
import Reducer from './components/reducer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ErrorPage from './components/ErrorPage';
import ErrorBoundary from './components/ErrorBoundary';
import TestErrorBoundary from './components/testErrorBoundary';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />}>
        
        </Route>
        <Route path="/UseCounter" element={
          <ErrorBoundary>
            <Counter />
          </ErrorBoundary>
          }>
          
        </Route>
        <Route path='/Reducer' element={<Reducer />}>

        </Route>
        <Route path="*" element={<ErrorPage />}>
          
        </Route>
      </Routes>
      <ErrorBoundary>
        <TestErrorBoundary />
      </ErrorBoundary>
        </div>
  );
}

export default App;
