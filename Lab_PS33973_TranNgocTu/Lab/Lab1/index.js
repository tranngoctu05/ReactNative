import { View, Text , StyleSheet, StatusBar,SafeAreaView } from 'react-native'
import React from 'react'

const Lab1 = () => {
    const validRule = ({ name, goals } = {}) => {
        return !!name && !!goals;
      };
      const players = [
        { name: 'Messi', goals: 30 },
        undefined,
        { name: 'Ronaldo', goals: 28 },
        { name: 'Neymar', goals: 22 },
        { goals: 2 },
        { name: 'Mbappé', goals: 25 },
        { name: 'Pele', goals: null},
        {name :'Quang Hai',goals:0},
        {name :'Tien Linh',goals:0}
      ];
      let MAXGOALS = 0;
      let validPlayers = [];
      let SumGoals = 0;
    
      let MINGOALS = Infinity;
      validPlayers = players.filter(player => {
        if (validRule(player)) {
          MAXGOALS = Math.max(MAXGOALS, player?.goals || 0);
          MINGOALS = Math.min(MINGOALS, player?.goals || 0);
          SumGoals += player.goals;
          
          return true;
        }
      
        return false;
      });
      const Nogoals =players.filter(player=> player?.goals==0)
      const topScorers = validPlayers.filter(player => player.goals === MAXGOALS);
      const botScorers = validPlayers.filter(player => player.goals === MINGOALS);
      console.log("List cầu thủ hợp lệ:", validPlayers);
      console.log("Cầu thủ ghi nhiều bàn thắng nhất:", topScorers);
      console.log("Tổng số bàn thắng: ", SumGoals);
      console.log("Cầu thủ ghi ít bàn nhất: ", botScorers);
      return (
<View style={styles.container}>
          <Text style={styles.sectionText}>
            Danh sách cầu thủ hợp lệ:
          </Text>
          {
            validPlayers.map((player, index) => (
              <Text key={index} style={styles.playerText}>{player?.name}</Text>
            ))
          }
          <Text style={styles.sectionText}>
            Cầu thủ ghi nhiều bàn thắng nhất:
          </Text>
          {
            topScorers.map((player, index) => (
              <Text key={index} style={styles.playerDetailText}>
                {player?.name} - {player?.goals}
              </Text>
            ))
          }
          <Text style={styles.sectionText}>
            Tổng số bàn thắng: 
          </Text>
          <Text style={styles.playerDetailText}>{SumGoals}</Text>
          <Text style={styles.sectionText}>
            Cầu thủ ghi ít bàn thắng nhất:
          </Text>
          {
            botScorers.map((player, index) => (
              <Text key={index} style={styles.playerDetailText}>
                {player?.name} - {player?.goals}
              </Text>
            ))
          }
           <Text style={styles.sectionText}>
            Cầu thủ không ghi bàn:
          </Text>
          {
           Nogoals.map((player, index) => (
              <Text key={index} style={styles.playerDetailText}>
                {player?.name} - {player?.goals}
              </Text>
            ))
          }
   </View>
      );
}
const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: 'white'
    },
    headerText: {
      fontSize: 25,
      color: 'red',
      textAlign: 'center',
      marginBottom: 16,
    },
    sectionText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 8,
    },
    playerText: {
      fontSize: 14,
      marginLeft: 16,
      color: 'red'
    },
    playerDetailText: {
      fontSize: 14,
      marginLeft: 16,
      color: 'red',
    },
    totalGoalsText: {
      fontSize: 16,
      marginTop: 8,
    },
  });
export default Lab1