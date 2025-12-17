
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
       <SecondaryConatainer />
    </div>
  )
}

export default Browse;


