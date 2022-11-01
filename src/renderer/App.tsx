import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ChampionsContainer from './containers/champions';
import RootContainer from './containers/root';
import Index from './containers/index';
import './App.css';
import './App.scss';

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<RootContainer />}>
          <Route index element={<Index />} />
          <Route path="champions" element={<ChampionsContainer />} />
          <Route path="champions-data" element={<ChampionsContainer />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
