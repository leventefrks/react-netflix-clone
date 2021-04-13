import Navbar from './components/Navbar';
import Row from './components/Row';
import Footer from './components/Footer';
import axios from './axios';
import { REQUESTS, MENU_ITEMS } from './constants';

const items = MENU_ITEMS;

function App() {
  return (
    <div className="App">
      <Navbar items={items} />
      <main className="w-full min-h-screen pt-20 pb-6 pl-8 bg-black overflow-hidden">
        {REQUESTS.map(request => (
          <Row key={request.id} title={request.title} url={request.url} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
