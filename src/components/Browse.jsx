
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';


const Browse = () => {
    useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
       <SecondaryConatainer />
    </div>
  )
}

export default Browse;


