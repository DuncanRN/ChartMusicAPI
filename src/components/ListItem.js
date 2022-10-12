import React from 'react';

const ListItem = ({ song_artist, song_title, position}) => {
    return <li> <h4>{position+1}</h4> {song_artist} with "{song_title}" </li>
}

export default ListItem;