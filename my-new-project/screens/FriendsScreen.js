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
            style={styles.location}
            background={Touchable.Ripple('#ccc', false)}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>
                  {database.location}
                </Text>
              </View>
            </View>
          </Touchable>
        }

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
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
  },
  locationText: {
    fontSize: 35,
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 2,
  },
  locationContainer: {
    marginRight: 5
  }
});
