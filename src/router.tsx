import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = lazy(() => import('./screens/App'));
const Vr = lazy(() => import('./screens/Vr'));
const Form = lazy(() => import('./screens/Form'));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Route path='/' exact component={(props:any) => <App {...props} />} />
        <Route path='/vr' exact component={(props: any) => <Vr {...props} />} />
        <Route path='/form' exact component={(props: any) => <Form {...props} />} />
      </div>
    </Suspense>
  </Router>
);

export default AppRouter;