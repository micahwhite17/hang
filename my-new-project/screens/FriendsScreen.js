import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Touchable from 'react-native-platform-touchable';


var database = {
  'numFriends': 3,
  'numLocations': 1,
  'location': 'Ferg',
  'friends': ['Micah', 'Keaton', 'Josh'],
};

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */
        // <ExpoLinksView />
        }

        <Touchable
          style={styles.location}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>
                {database.location}: {database.friends.length}
              </Text>
            </View>
          </View>
        </Touchable>
        
        {database.friends.map(x => (
          <Touchable
            style={styles.friend}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.friendContainer}>
                <Text style={styles.friendText}>
                  {x}
                </Text>
              </View>
            </View>
          </Touchable>
        ))}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  location: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#8C8C8C',
  },
  locationText: {
    fontSize: 35,
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 2,
  },
  locationContainer: {
    marginRight: 5
  },
  friend: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#8C8C8C',
  },
  friendText: {
    fontSize: 20,
    marginLeft: 70,
    marginTop: 2,
    marginBottom: 2,
  },
  friendContainer: {
    marginRight: 10
  }
});
