import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { 
      title: 'Lives in the Balance', 
      duration: '4:15'
    },
    { 
      title: 'Changes IV', 
      duration: '3:33'
    },
    { 
      title: 'Drywood', 
      duration: '4:56'
    },
    { 
      title: 'Careful Man', 
      duration: '2:23'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});