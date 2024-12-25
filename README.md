# Music album PWA 💽

This is a simple proof-of-concept to ship a music album as a PWA, initially created for a friend (to "install" the album on an iOS device). Use it for whatever purpose you like (the custom JS code, as well as the HTML markup, is licensed under a CC0 license).

You can click on the following link to access the [demo PWA](https://zeront4e.github.io/demos/music-player-pwa/index.html) (please enter the full-screen mode to simulate the installed PWA).

## Features 📦

- Detection of the PWA install-state (shows install instructions if the PWA wasn't installed yet)
- Installation with a single click, on supported platforms (conditionally shown install-button)
- Automatic extraction of MP3 metadata (title, album, artist, year and optional cover art)
- Responsive UI
- Album songs view (list of all audio files)
- Song player view with an audio visualization, depending on the played audio data

## Usage ⚙

1) Insert every song of an "album" as an MP3 file into the "music" directory. Please set the metadata you want to show (title, artist, album, year and JPEG cover image), otherwise fallback data is displayed.
2) Run the script "create-music-json.ps1" (Windows) or "create-music-json.sh" (Linux) to create the file "music.json", which includes all available songs (this is required to cache the album and find the available data).
3) Run the "ran" webserver executable (Windows) or your own server to access the PWA. Note that this only works locally. Otherwise, you MUST enable TLS (HTTPS) to install the app on another device (non-localhost).

### Hints 🔎

Please clear the cache whenever you want to reload the PWA site (e.g. by using the force-reload shortcut), otherwise the cached data is read.

You can simulate the "installed" PWA by enabling the full-screen mode in your browser. This allows you to debug everything without actually installing the PWA. This also allows you to develop in unsupported environments like Firefox (which doesn't allow you to install PWA applications).

If you want to test the PWA installation, it's recommended to start a Chromium based browser (e.g. Edge or Chrome) or any other browser that supports the installation of PWA based applications.

You can create a self-signed certificate to test the actual installation of your PWA on a remote device in your local network. Ran allows you to generate a self-signed certificate. Otherwise, you'll have to generate a certificate manually. Note that it isn't necessary to install your self-signed certificate on the remote device. Just make sure you use the self-signed certificate only in a trusted environment, if you don't install the custom certificate.

### Start ran with enabled TLS

The following command starts the ran-server with a custom certificate.

.\ran_windows_amd64.exe -tls-port=8181 -cert=C:\Users\User\IdeaProjects\music-player-pwa\cert.crt -key=C:\Users\User\IdeaProjects\music-player-pwa\pk.key

## Credits

- Demo music by Scott Buckley (www.scottbuckley.com.au), licensed under a Creative Commons Attribution 4.0 International License (every cover art was modified)

- Bootstrap contributors (see css/js file) 
- Animate CSS contributors (see css file) 
- mp3tag.js contributors (see js file)
- wavesurfer.js contributors (see js file)

- ran webserver contributors (see https://github.com/m3ng9i/ran)