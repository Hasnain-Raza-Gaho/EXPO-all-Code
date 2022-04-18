import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Home = ({navigation}) => {
  const DATA = [
    {
      name: 'ali',
      conatct: '0200202',
    },
    {
      name: 'asad',
      conatct: '0200202',
    },
    {
      name: 'ali',
      conatct: '0200202',
    },
    {
      name: 'omer',
      conatct: '0200202',
    },
  ];

  const signup = () => {
    auth()
      .createUserWithEmailAndPassword('njhjhjew114@example.com', '1234567')
      .then(data => {
        console.log('User account created & signed in!');
        console.log(data.user.uid);

        const usersCollection = firestore().collection('Users');
        var obj = {
          name: 'asad',
          email: 'new114@example.com',
          password: '1234567',
          uid: data.user.uid,
        };
        console.log(obj);

        usersCollection.doc(data.user.uid).set(obj);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View>
      
        <Button onPress={() => signup()} title="Signup"></Button>

        {/* <Button onPress={()=>console.log("data")} title="On click"> </Button> */}

        {/* <TouchableOpacity style={{ backgroundColor: "red", width: 100, marginTop: 100, height: 100 }} activeOpacity={0.4} >
          <Text>Click</Text>
        </TouchableOpacity>
        <FlatList
          data={DATA}
          renderItem={(data) => {
            console.log(data.item)
            return (
              <View style={{ borderWidth: 2, backgroundColor: "blue", borderColor: "red", borderStyle: "solid", marginTop: 20 }}>
                <Text style={{ color: "white", fontSize: 30 }}>{data.item.name}</Text>
                <Text style={{ color: "white", fontSize: 30 }}>{data.item.conatct}</Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.id}
        // extraData={selectedId}
        /> */}
      
    </View>
  );
};

export default Home;
