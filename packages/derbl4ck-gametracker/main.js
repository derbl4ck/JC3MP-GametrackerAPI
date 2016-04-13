/**
 * @overview Entry point of the package
 * @author Lukas 'derbl4ck' Berwanger
 * @copyright (c) derbl4ck
 * @license See LICENSE file
 */

'use strict';

const express = require('express');
const config = require('config');

var app = express();

app.listen(2222, () => {
  console.log('GametrackerAPI by derbl4ck started on port 2222');
});

app.get('/', function(req, res) {
  console.log('[GametrackerAPI] got new request');

  let players = [];

  for (let i = 0; i < jcmp.players.length; i++) {
    players.push(jcmp.players[i].client.name);
  }

  res.json({
      'name': config.name,
      'game': 'jc3',
      'mode': config.mode,
      'type': config.type,
      'serverIP': config.serverIP,
      'serverPort': config.serverPort,
      'playercount': jcmp.players.length,
      'players': players
  });
});
