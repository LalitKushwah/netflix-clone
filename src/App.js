import './App.css';
import Row from './Row';
import RequestUrl from './Request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={RequestUrl.fetchNetflixOriginals}
        isLargeRow>          
      </Row>
      <Row title="Tredening Now" fetchUrl={RequestUrl.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={RequestUrl.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={RequestUrl.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={RequestUrl.fetchComedyMovies}></Row>
      <Row title="Romance Movies" fetchUrl={RequestUrl.fetchRomanceMovies}></Row>
      <Row title="Horror Movies" fetchUrl={RequestUrl.fetchHorrorMovies}></Row>
      <Row title="Documentary" fetchUrl={RequestUrl.fetchDocumentaries}></Row>                  
    </div>
  );
}

export default App;
