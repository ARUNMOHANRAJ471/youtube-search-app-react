import React from 'react';
import VideoListIem from './videoListItem';
const VideoList = (props) => {
  const videoItems = props.videos.map((video, key)=><VideoListIem key={key} video={video} onSelectedVideo={props.onSelectedVideo}/>)
  return (<ul className="col-md-4 list-group">
    {videoItems}
  </ul>)
}

export default VideoList;
