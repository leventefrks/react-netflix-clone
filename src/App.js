import Row from './components/Row';
import axios from './axios';
import { REQUESTS } from './constants';

function App() {
  return (
    <div className="App">
      <main className="w-full min-h-screen py-6 bg-black overflow-hidden">
        {REQUESTS.map(request => (
          <Row key={request.id} title={request.title} url={request.url} />
        ))}
      </main>
    </div>
  );
}

export default App;
