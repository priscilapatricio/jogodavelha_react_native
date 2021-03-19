export default {
    board:['','','','','','','','',''],
    symbols:{
        options: ['0','X'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1:0);
        }
    },
    gameover: false,
    winning_sequences:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    make_play: function(position) {
        if (this.gameover) return false;
        if (this.board[position] === ''){
            this.board[position] = this.symbols.options[this.symbols.turn_index];
            let winning_sequences_index = this.check_winning_sequences( this.symbols.options[this.symbols.turn_index] );
            if (winning_sequences_index >= 0){
                this.game_is_over();
            } else{
                this.symbols.change();
            }
            return true;
        }
        else {
            return false;
        }
    },

    check_winning_sequences: function(symbol){
        for( const i in this.winning_sequences ){
            if(this.board [this.winning_sequences[i][0]] == symbol &&
               this.board [this.winning_sequences[i][1]] == symbol &&
               this.board [this.winning_sequences[i][2]] == symbol){
               console.log('winning sequences INDEX:' + i);
            return i;               
            }
        };
        return -1;
    },
    
    game_is_over: function(){
        this.gameover = true;
        console.log("GAME OVER");
    },

    start: function(){
        this.board.fill('');
        this.gameover = false;
    }

};