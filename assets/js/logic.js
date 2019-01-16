var player = new Spotify.Player({
    name: 'Carly Rae Jepsen Player',
    getOAuthToken: callback => {
      // Run code to get a fresh access token
  
      callback('access token here');
    },
    volume: 0.5
  });