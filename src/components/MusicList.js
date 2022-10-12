import React from 'react';
import ListItem from './ListItem';

const MusicList = ({songs}) => {

    const songsItems = songs.map((song, index) => {
        return <ListItem song={song}  
        song_artist = {song["im:artist"].label}
        song_title = {song["im:name"].label}
        key={index} 
        position={index} />
    })

    return (
    <div>
        <ul>
            {songsItems}
        </ul>
    </div>
    )

}

export default MusicList;