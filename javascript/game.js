PixelJS.assetPath = '/assets';
var game = new PixelJS.Engine();
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        game.init({
            container: 'game_container',
            width: 1920,
            height: 1080
        });

        if(game.displayFPS == false)
        {
          game.displayFPS = true;
        }

        var backgroundLayer = game.createLayer('background');
        var grass = backgroundLayer.createEntity();
        backgroundLayer.static = true;
        grass.pos = { x: 0, y: 0 };
        grass.asset = new PixelJS.Tile();
        grass.asset.prepare({
            name: 'grass.png',
            size: {
                width: 1920,
                height: 1080
            }
        });

        var playerLayer = game.createLayer('players');
        var player = new PixelJS.Player();
        player.addToLayer(playerLayer);
        player.pos = { x: 1920 / 2, y: 1080 / 2 };
        player.size = { width: 32, height: 32 };
        player.velocity = { x: 100, y: 100 };
        player.asset = new PixelJS.AnimatedSprite();
        player.asset.prepare({
            name: 'char.png',
            frames: 3,
            rows: 4,
            speed: 140,
            defaultFrame: 1
        });

        var itemLayer = game.createLayer('items');
        var coin = itemLayer.createEntity();
        coin.pos = { x: 400, y: 150 };
        coin.size = { width: 12, height: 16 };
        coin.asset = new PixelJS.AnimatedSprite();
        coin.asset.prepare({
            name: 'coin.png',
            frames: 8,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var collectSound = game.createSound('collect');
        collectSound.prepare({ name: 'coin.mp3' });

        player.onCollide(function (entity) {
            if (entity === coin) {
                collectSound.play();
                coin.pos = {
                    x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
                    y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
                };

                score += 1;
                scoreLayer.redraw = true;
                scoreLayer.drawText(
                    'Coins: ' + score,
                    50,
                    50,
                    '14pt "Trebuchet MS", Helvetica, sans-serif',
                    '#FFFFFF',
                    'left'
                );
            }
        });

        playerLayer.registerCollidable(player);
        itemLayer.registerCollidable(coin);

        var score = 0;
        var scoreLayer = game.createLayer("score");
        scoreLayer.static = true;

        game.loadAndRun(function (elapsedTime, dt) {
        });
    }
}
