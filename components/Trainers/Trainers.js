import React, { Component } from 'react';
import {Text, FlatList, StyleSheet, Image, View, TextInput, ScrollView, Button}  from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Trainers extends Component {
  state = {
    topTrainers: [
      {
        id: "1",
        name: "Shawn Booth - PT",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shawn-booth-headshot-1526923298.jpg?resize=480:*",
        trainees: "55 trainees this month",
        rating: 4.8,
        location: "Windsor Locks, Connecticut, Hoa Kỳ"
      }, 
      {
        id: "2",
        name: "Chris Powell - PT",
        img: "https://www.trainmag.com/wp-content/uploads/2017/10/Chris-powell-workout-hero.jpg",
        trainees: "48 trainees this month",
        rating: 4.8,
        location: "Phoenix, Arizona"
      }, 
      {
        id: "3",
        name: "Trần Bích Hạnh - Online PT",
        img: "http://cdn.thehinh.com/2017/06/tran-bich-hanh-8.jpg",
        trainees: "30 trainees this month",
        rating: 4.6,
        location: "Hà Nội, Việt Nam"
      }, 
    ]
  }
  onSelectTrainer = (trainer) => {
    
  }
  render() {
    const trainers = [
      {
        id: "1",
        name: "Shawn Booth - 32 y/o",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shawn-booth-headshot-1526923298.jpg?resize=480:*",
        method: "Direct Personal Trainer",
        rating: 4.8,
        location: "Connecticut, Hoa Kỳ",
        price: "6000$/ 48 days",
        time: "Mon - Fri: 9am - 7pm"
      }, 
      {
        id: "2",
        name: "Chris Powell - 41 y/o",
        img: "https://www.trainmag.com/wp-content/uploads/2017/10/Chris-powell-workout-hero.jpg",
        method: "Direct Personal Trainer",
        rating: 4.8,
        location: "Phoenix, Arizona",
        price: "2000$/ 48 days",
        time: "Fri - Sun: 7am - 9pm"
      }, 
      {
        id: "3",
        name: "Trần Bích Hạnh - 26 y/o",
        img: "http://cdn.thehinh.com/2017/06/tran-bich-hanh-8.jpg",
        method: "Online Personal Trainer",
        rating: 4.6,
        location: "Hà Nội, Việt Nam",
        price: "5.500.000 VND/ 48 days",
        time: "Mon - Sat: 6am - 6pm"
      }, 
      {
        id: "4",
        name: "Maik Berger - 38 y/o",
        img: "https://livbyaia.com/media/images/2017/11/pt-aia-9august-2017-ls-1-b23c07c79f8896e0e6518f1c928abedf.jpg",
        method: "Personal Trainer",
        rating: 4.3,
        location: "Hồ Chí Minh, Việt Nam",
        price: "6.500.000 VND/ 30 days",
        time: "Mon - Sat: 6am - 9pm"
      }, 
    ]
    return (
      <ScrollView stylle={styles.container}>
        <Image source={{uri: 'https://cdn6.f-cdn.com/contestentries/17411/5251780/515fcbc7a88d0_thumb900.jpg'}} style={styles.ad}/>
        <View style={styles.topTrainer}>
          <MaterialCommunityIcons name="medal" color="orange" size={19} />
          <Text style={styles.title}>Top trainers this month</Text>
        </View>
        <FlatList 
          horizontal
          showsVerticalScrollIndicator={false}
          data={this.state.topTrainers}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => 
            <View style={styles.topTrainerProfile}>
              <Image source={{uri: item.img}} style={styles.topTrainerImg} />
              <View>
                <Text style={styles.topTrainerName}>{item.name}</Text>
                <View style={styles.topTrainerDetail}>
                  <MaterialCommunityIcons name="account-group" color="orange" size={19} style={styles.topIcon} />
                  <Text>{item.trainees}</Text>
                </View>
                <View style={styles.topTrainerDetail}>
                  <MaterialCommunityIcons name="star-face" color="orange" size={19} style={styles.topIcon} />
                  <Text>{item.rating}</Text>
                </View>
                <View style={styles.topTrainerDetail}>
                  <MaterialCommunityIcons name="map-marker" color="orange" size={19} style={styles.topIcon} />
                  <Text>{item.location}</Text>
                </View>
              </View>
            </View>
          }
        /> 
        <Text style={styles.title}>Find your trainer now</Text>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons style={styles.searchIcon} name="magnify" size={20} color="#000"/>
          <TextInput
              style={styles.input}
              placeholder="Search trainer"
              onChangeText={(searchString) => {this.setState({searchString})}}
              underlineColorAndroid="transparent"
          />
        </View>
        <FlatList 
          data={trainers}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => 
            <View style={styles.trainerProfile}>
              <Image source={{uri: item.img}} style={styles.topTrainerImg} />
              <View style={styles.trainerDetail}>
                <Text style={styles.topTrainerName}>{item.name}</Text>
                <Text>{item.method}</Text>
                <Text>{item.location}</Text>
                <Text>{item.rating}</Text>
                <Text>{item.price}</Text>
                <Text>{item.time}</Text>
              <Button title="Follow" color="orange" onPress={this.onSelectTrainer}/>
              </View>
            </View>
          }
        /> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ad: {
    width: '100%',
    height: 50,
    marginBottom: 10
  },
  topTrainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 3,
    textAlign: 'center'
  },
  topTrainerProfile: {
    width: 360,
    height: 100,
    borderWidth: 2,
    borderColor: 'orange',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    marginBottom: 10
  },
  topTrainerImg: {
    width: 90,
    height: 90,
    marginRight: 20
  },
  topTrainerDetail: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  topTrainerName: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  topIcon: {
    marginRight: 5
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'orange',
    marginBottom: 20
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  trainerDetail: {
    width: '60%'
  },
  trainerProfile: {
    width: 350,
    height: 160,
    borderWidth: 2,
    borderColor: 'orange',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    marginBottom: 5,
    alignSelf: 'center'
  }
});

export default Trainers;