### Install

- `npm i`
- Make sure to login first using the `azure-cli` -> `az login`

### Run (using ffmpeg + internal Macbook Webcam)

1. Run `npm start`. The resources will be created in Azure automatically. Wait for the message `The RTMP ingest URL to enter into OBS Studio is` to appear. When it asked to "continue"; DO NOTHING! :-)
2. Update the `rtmpStreamUrl` variable in `./stream-webcam-to-rtsp.sh` so that the URL is matching the `RTMP ingest URL` shown in the terminal. Also update the `streamKey` variable with the value you can find in the Azure Live Event UI.
3. Save the file and run `./stream-webcam-to-rtsp.sh`. Maybe you should make the file executable first -> `chmod a+x ./stream-webcam-to-rtsp.sh`.
4. In Azure Media Service you can go to the Live Event that is currently running. Over there make sure a "Streaming locator" is created and selected.
5. Copy the DASH URL and put it into the video tag src in `dash.html`. Save this file and open in the browser to display the stream.
6. When finished stop the terminal proces by pressing `"n"`. It will clean up the Azure resources automatically.

### Run (using OBS)

1. Run `npm start`. The resources will be created in Azure automatically. Wait for the message `The RTMP ingest URL to enter into OBS Studio is` to appear. When it asked to "continue"; DO NOTHING! :-)
2. Start OBS, make a scene with your webcam feed and set the "Stream Server" to the URL that is displayed in the terminal. It looks something like `rtmp://liveevent-f8abc77a-updated-roboticsstream-euwe.channel.media.azure.net:1935/live/8257f1d182474318b743f541c20ea7a6`. Also set the "Stream Key" to the same value as "accessToken" defined in index.ts:221. (Not sure if this is required tho)
3. Start Stream in OBS
4. In Azure Media Service you can go to the Live Event that is currently running. Over there make sure a "Streaming locator" is created and selected.
5. Copy the DASH URL and put it into the video tag src in `dash.html`. Save this file and open in the browser to display the stream.
6. When finished stop the terminal proces by pressing `"n"`. It will clean up the Azure resources automatically.

### Known issues

- When running `npm start` and continue from the step `IMPORTANT TIP!: Make CERTAIN that the video is flowing to the Preview URL before continuing!`, the script may crash. Make sure to delete the Live Event in Azure manually to stop the billing process ;-)
- Logging in with Azure CLI is required for now. We should create a new app registration, generate client ID + secret for it and connect it to the Azure Media Service. But so far there was nobody who got that working.

### !!! Important !!!

- Check for and stop all Live Events when you are done experimenting. Otherwise the billing will continue!
