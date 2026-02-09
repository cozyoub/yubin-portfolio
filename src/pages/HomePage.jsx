import Header from '../components/Header';
import Bookshelf from '../components/Bookshelf';

function HomePage() {
  return (
    <div className="wrap wrap--bookshelf">
      <Header />
      <Bookshelf />
    </div>
  );
}

export default HomePage;
