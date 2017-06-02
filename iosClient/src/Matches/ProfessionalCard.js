import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ExperienceItem from './ExperienceItem.js'
class ProfessionalCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.bigText}>Professional</Text>
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

module.exports = ProfessionalCard;