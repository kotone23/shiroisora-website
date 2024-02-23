"use client";
import YouTube from 'react-youtube';

export default function MV() {
  return (
    <YouTube 
      videoId= "13yytDs4TeQ" //挿入したいyoutube動画のURL末尾を入力
      opts={
        {
          width: '100%'
        }
      }
    />
  );
}