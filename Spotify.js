window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQAgRM0ebBqyyh_ovPQ2YYzwZVrQDLUnRWzuL6E0DvE1jjMYOOW4Zly8Qyx2WAA1KdfMCvhvIoh12gDB6c-G72r4Ir7UnubxPpqN3toT1wQmRYEwYO98eAj2_z3s8UvhUHbUYUmC_iUTOernkIGq7YgAGECwT5Q78w';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };