import {
  Route,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import './App.scss';
import ChampionsContainer from './containers/champions/containers/index';
import RootContainer, {
  loader as rootLoader,
  action as rootAction,
} from './containers/root';
import Index from './containers/index';
import UploadPage from './containers/upload/containers/index';
import ErrorPage from './containers/error';

const App = createMemoryRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<RootContainer />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="champions"
          element={<ChampionsContainer />}
          // loader={contactLoader}
          // action={contactAction}
        />
        <Route
          path="champions-data"
          element={<ChampionsContainer />}
          // loader={contactLoader}
          // action={editAction}
        />
        <Route path="upload" element={<UploadPage />} />
        {/* <Route path="contacts/:contactId/destroy" action={destroyAction} /> */}
      </Route>
    </Route>
  )
);

export default App;
