# JC3:MP  GametrackerAPI

JC3MP-GametrackerAPI is a lightweight package for Just Cause 3 Multiplayer Servers.

This package serves a simple API which makes it possible for Services like gametracker.com to get basic Information about your Server.

Hopefully this package is used on many servers, to provide a new basic Information Standard in Just Cause 3 Multiplayer.

## Installation

  - Put the package inside the packages directory of your server
  - Change default data in _config.js_ to your own
  - Simply run your server :)

## Sample API response

The API should be on all servers on port 2222 ;)

`{
name: "JustLifeRPG.com | DE | first & best RP Server",
game: "jc3",
mode: "JustLifeRPG",
type: "RPG",
serverIP: "justliferpg.com",
serverPort: "5555",
playercount: "4",
players: [
"PlayerXy0",
"PlayerXy1",
"PlayerXy2",
"PlayerXy3"
]
}`

License
----
MIT
