
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
    const showGptSearch = useSelector(Store=>Store.gpt.showGptSearch)

    useNowPlayingMovies();
    usePopularMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch />) :(
          <><MainContainer />
       <SecondaryConatainer /></>
        ) 
      }
      
      
    </div>
  )
}

export default Browse;


