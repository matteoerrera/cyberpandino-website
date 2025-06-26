import React, { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

const VimeoSDKPlayer = (props: { videoId: number }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playerRef.current) return;
    
    const player = new Player(playerRef.current, {
      id: props.videoId, 
    });

    player.on('play', () => {
      console.log('Video is playing');
    });

    return () => {
      player.destroy().catch(console.error);
    };
  }, [props.videoId]);

  return <div ref={playerRef}></div>;
};

export default VimeoSDKPlayer;
