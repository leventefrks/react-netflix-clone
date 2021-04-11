import Row from './components/Row';
import axios from './axios';
import { REQUEST } from './constants';

function App() {
  return (
    <div className="App">
      <main className="w-full min-h-screen py-6 bg-black overflow-hidden">
        <Row title="popular on netflix" url={REQUEST.trending} />
        <Row title="drama" url={REQUEST.drama} />
        {/* <Row title="action" url={REQUEST.action} /> */}
        <Row title="comedies" url={REQUEST.comedy} />
      </main>
    </div>
  );
}

export default App;
