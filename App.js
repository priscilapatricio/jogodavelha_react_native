/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import tictactoe from './src/tictactoe';

 type Props = {};
 export default class App extends Component<Props> {

  constructor(props){
    super(props);

    tictactoe.start();

    this.state = {
      board: tictactoe.board,
      gameOver: tictactoe.gameover
    }
  }

  makePlay(index){

    tictactoe.make_play(index)

    this.setState({
      board: tictactoe.board,
      gameOver: tictactoe.gameover
    })
  }

  isGameOver(){
    if(this.state.gameOver){
      return <Text>Game Over</Text>
    }
  }

   render() {
     return (
       <View style={styles.container}>

         {this.state.board.map((value, index) => (
           <TouchableOpacity 
                key={index} 
                style={styles.piece}
                onPress={() => { 
                  this.makePlay(index) 
                }}>
              <Text style = {styles.pieceText}>
                {value}  
              </Text>  
           </TouchableOpacity>
         ))}

         {
           this.isGameOver()
         }

       </View>
     );
   }
 } 

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: "row",
     flexWrap: 'wrap',
     justifyContent: 'center',
     alignItems: 'center',
     alignContent: 'center',
     backgroundColor: '#F5FCFF'
   },
   piece: {
     width: Dimensions.get('window').width / 3,
     height: Dimensions.get('window').width / 3,
     backgroundColor: "#ddd",
     alignItems: 'center',
     justifyContent: 'center',

     borderWidth: 0.5,
     borderColor: "#111"
   },
   pieceText: {
     fontSize: 60 
   }
 });
