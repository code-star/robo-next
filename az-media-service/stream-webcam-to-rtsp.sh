#!/bin/bash

rtmpIngestUrl="rtmp://liveevent-22716f86-updated-roboticsstream-euwe.channel.media.azure.net:1935/live/8257f1d182474318b743f541c20ea7a6"
streamKey="liveEvent-22716f86"

rtmpStreamUrl="$rtmpIngestUrl/$streamKey"

echo "Start streaming to: $rtmpStreamUrl..."

# Stream Macbook webcam to RTSP over UDP
ffmpeg \
  -f avfoundation \
  -pix_fmt yuyv422 \
  -video_size 640x480 \
  -framerate 30 \
  -i "0:0" -ac 2 \
  -vf format=yuyv422 \
  -vcodec libx264 -maxrate 2000k \
  -bufsize 2000k -acodec aac -ar 44100 -b:a 128k \
  -f flv $rtmpStreamUrl
