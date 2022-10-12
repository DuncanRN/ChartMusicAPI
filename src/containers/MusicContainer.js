import React, {useState, useEffect} from 'react';
import MusicList from '../components/MusicList';


const MusicContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    //console.log(songs);
    // chart=songs.feed.entry;
    // console.log(chart);

    return (
        <div className="main-container">
            
            <MusicList songs={songs} />
            
        </div>


    )

{/* <MunroSelector munros={munros} onMunroSelected={onMunroSelected} />

{selectedMunro ? <MunroDetail selectedMunro={selectedMunro} /> : null } */}


}

export default MusicContainer;