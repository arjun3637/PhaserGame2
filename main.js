var GameState = {
    preload: function(){
        this.load.image('background', 'images/background.png');
        this.load.image('chicken', 'images/chicken.png');
        this.load.image('horse', 'images/horse.png');
        this.load.image('pig', 'images/pig.png');
        this.load.image('sheep', 'images/sheep3.png');
        this.load.image('arrow', 'images/arrow.png');

    },
    create: function(){

        //screen scale
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //screen center allignment
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.background = this.game.add.sprite(0, 0, 'background');

        //group for animals
        var animalData = [
            {key: 'chicken', text: 'CHICKEN'},
            {key: 'horse', text: 'HORSE'},
            {key: 'pig', text: 'PIG'},
            {key: 'sheep', text: 'SHEEP'}
        ];

        this.animals = this.game.add.group();

        var self = this;
        var animal;
        animalData.forEach(function(element){
            animal = self.animals.create(-1000, this.game.world.centerY, element.key);

            animal.customParams = {text: element.text};
            animal.anchor.setTo(0.5);

            animal.inputEnabled = true;
            animal.input.pixelPerfectClick = true;
            animal.events.onInputDown.add(self.animateAnimal, self);
        });

        this.currentAnimal = this.animals.next();
        this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY)
        //Left arrow
        this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.x = -1
        this.leftArrow.customParams = {direction: -1};
        //user input for left arrow
        this.leftArrow.inputEnabled = true;
        this.leftArrow.input.pixelPerfectClick = true;
        this.leftArrow.events.onInputDown.add(this.switchAnimal, this);

        //Right arrow
        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
        this.rightArrow.anchor.setTo(0.5);
        this.rightArrow.customParams = {direction: 1};
        //user input for right arrow
        this.rightArrow.inputEnabled = true;
        this.rightArrow.input.pixelPerfectClick = true;
        this.rightArrow.events.onInputDown.add(this.switchAnimal, this);
    },
    update: function(){    
    },
    animateAnimal: function(sprite, event) {
        console.log('animate animal');
    },
    switchAnimal: function(sprite, event) {
        var newAnimal, endX;

        if (sprite. customParams.direction > O) {
            newAnimal = this.animals.next();
            endX = 640 + this.currentAnimal.width/2;
            }else {
            newAnimal = this.animals.previous() ;
            endX = -this.currentAnimal.width/2;
            }
            this.currentAnimal.x = endX;
    }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');


