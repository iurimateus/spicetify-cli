// @ts-check

// NAME: AutoIncognito
// AUTHOR: iurimateus
// DESCRIPTION: Enable incognito/private session on startup

/// <reference path="../globals.d.ts" />

(function AutoIncognito() {
  if (!Spicetify.CosmosAsync || !Spicetify.Platform || !Spicetify.Menu || !Spicetify.Player) {
    setTimeout(AutoIncognito, 1000);
    return;
  }

  Spicetify.PlaybackControl.setPrivateSession(true)
    .then((result) => console.log(JSON.stringify(result)))
    .catch((err) => Spicetify.showNotification(`${JSON.stringify(err)}`));
})();
