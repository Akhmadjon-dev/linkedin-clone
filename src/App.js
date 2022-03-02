import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />

        <Feed />
      </div>
        {/* sidebar */}
        {/* Feed */}
        {/* widgets */}
    </div>
  );
}

export default App;
