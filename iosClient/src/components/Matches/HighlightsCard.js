import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import { getMatches } from '../../actions/Matches';

export class HighlightsCard extends Component {
  constructor (props){
    super();
    this.handleGitClick = this.handleGitClick.bind(this);
    this.handleLNKDClick = this.handleLNKDClick.bind(this);
  }

  handleGitClick() {
    Linking.canOpenURL('https://www.github.com/').then(supported => {
      if (supported) {
        var url = this.props.currentMatch.github_url        
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }
  
  handleLNKDClick() {
    Linking.canOpenURL('https://www.linkedin.com/').then(supported => {
      if (supported) {
        var url = this.props.currentMatch.linkedin_url
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }

  render() {
    let currentProfile = this.props.currentMatch;
    let currentMatchEduExp = this.props.currentMatchEduExp.data[0];
    let currentMatchProfExp = this.props.currentMatchProfExp.data[0];
    let currentMatchProjExp = this.props.currentMatchProjExp.data[0];
    return (
      <View style={styles.card}>

        <View style={ styles.imgHeader }>
          <Image
            style={styles.profileImg}
            source={{uri: currentProfile.image}}
          />
          <View>
            <TouchableOpacity onPress={this.handleGitClick}>
              <Image 
                style={styles.iconImg}            
                source={{uri:'https://assets-cdn.github.com/favicon.ico'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleLNKDClick}>
              <Image 
                style={styles.iconImg}            
                source={{uri:'https://www.iconfinder.com/data/icons/capsocial-round/500/linkedin-128.png'}}
              />
            </TouchableOpacity>          
          </View>
        </View>

        <View style= { styles.nameSection }>
          <Text style={styles.bigText}>{currentProfile.full_name}</Text>
          <Text style={styles.smallTextTitle}>{currentProfile.vertical}</Text>
        </View>

        <View>
          <Text style={styles.medText}>Education:
            <Text style={styles.smallText}> {currentMatchEduExp.organization}, {currentMatchEduExp.role} </Text>
          </Text>
          <Text style={styles.medText}>Professional: 
            <Text style={styles.smallText}> {currentMatchProfExp.organization}, {currentMatchProfExp.role}</Text>
          </Text>
          <Text style={styles.medText}>Project: 
            <Text style={styles.smallText}> {currentMatchProjExp.role}</Text>
          </Text>
          <Text style={styles.medText}>Personal: 
            <Text style={styles.smallText}>{currentProfile.summary}</Text>
          </Text>
        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    currentMatch: state.Matches.allMatches,
    currentMatchProfExp: state.Matches.professionalExp,
    currentMatchEduExp: state.Matches.educationExp,
    currentMatchProjExp: state.Matches.projectExp
  }
};

export default connect(mapStateToProps)(HighlightsCard);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  },
  iconImg: {
    height: 20,
    width: 20,
    marginTop: 10,
    alignSelf: 'center'
  },
  nameSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
  bigText: {
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallTextTitle: {
    alignSelf: 'center',      
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },
  medText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },  
  smallText: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 24,
    marginTop: 300,
    color: 'black',
    alignSelf: 'center'
  }  
})



