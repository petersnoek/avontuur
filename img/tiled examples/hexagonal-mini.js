(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("hexagonal-mini",
{ "height":20,
 "layers":[
        {
         "compression":"zlib",
         "data":"eJyV1OEKhCAQBGCxk8qyvPd\/2TPYhWEYtfsxxKV+ukveHUK4LamltnwtpWVruSjJxjA+dtuaZL\/rxHIvgXuRt9tYpPDcnlfEWISaVzgvx\/dyi8+YwfN3qwWdQnv36siWCOZJVgZPWVxvhjWqxpHH51M95V55T54cAw\/nvel\/NE+ZXqMyLtgT1xwd73F2y8hLZI68TB73UHmRrNPm\/eNFYXr8Oy3golVeWitZz32v4OWgv0t1JjQX8NB8633Eu2JOJY\/viLLc81rxvi3CU\/9JbJ1gLSJsbfAsHTNOPF+\/DbyZ4\/kBqWoNqg==",
         "encoding":"base64",
         "height":20,
         "name":"Ground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tileheight":12,
 "tilesets":[
        {
         "firstgid":1,
         "source":"hex mini.tsx"
        }, 
        {
         "firstgid":21,
         "source":"desert.tsx"
        }],
 "tilewidth":14,
 "version":1,
 "width":20
});