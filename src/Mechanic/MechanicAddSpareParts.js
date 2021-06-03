import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/AntDesign'
import Icongear from 'react-native-vector-icons/FontAwesome'





const MechanicAddSpareParts = () => {

  const Gallery = () => {
    launchImageLibrary({ quality: 0.5 }, (fileobj) => {
      console.log(fileobj)
      const uploadTask = storage().ref().child(`/items/${Date.now()}`).putFile(fileobj.uri)
      uploadTask.on('state_changed',
        (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == 100) { alert("Uploaded") }


        },
        (error) => {
          alert(error)
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            setImage(downloadURL)
          });
        }
      );


    }
    )
  }


  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const UploadSparePartsData = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.trim() === "" || desc.trim() === "" || price.trim() === "") {
      alert("All inputs must be filled!");
      return;
    }

    try {
      if (auth().currentUser) {
        let userId = auth().currentUser.uid;
        if (userId) {
          AsyncStorage.setItem('MechanicId', userId);
          database().ref('SpareParts/').push({
            name: name,
            desc: desc,
            price: price,
            MechanicId: userId,
            image: image


          })
        }
      }
      alert("Spare Parts Added")
    }
    catch (error) {
      console.log(error);
    }

  }

  const camera = () => {
    launchCamera({ quality: 0.5 }, (fileobj) => {
      console.log(fileobj)
      const uploadTask = storage().ref().child(`/items/${Date.now()}`).putFile(fileobj.uri)
      uploadTask.on('state_changed',
        (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == 100) { alert("Uploaded") }


        },
        (error) => {
          alert(error)
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            setImage(downloadURL)
          });
        }
      );


    }
    )
  }




  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}> ADD SPARE PARTS </Text>
        <View style={styles.txttopinput}>
          <TextInput
            label="Name"
            value={name}
            mode='outlined'
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.txtinput}>
          <TextInput
            label="Description about Spare Parts"
            value={desc}
            mode='outlined'
            numberOfLines={6}
            multiline={true}
            onChangeText={text => setDesc(text)}
          />
        </View>
        <View style={styles.txtinput}>
          <TextInput
            label="Price"
            value={price}
            mode='outlined'
            keyboardType="numeric"
            onChangeText={text => setPrice(text)}
          />
        </View>
        <View style={styles.txtbtn}>
          <TouchableOpacity style={styles.camera} onPress={() => camera()}>
            <Icon name='camera' style={styles.Icon} />
            <Text style={styles.txtupdate}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.camera} onPress={() => Gallery()}>

            <Icons name='picture' style={styles.Icon} />
            <Text style={styles.txtupdate}>Gallery</Text>
          </TouchableOpacity>


        </View>
        <TouchableOpacity style={styles.addspare} onPress={() => UploadSparePartsData()}>
          <Icongear name='gear' style={styles.Icongear} />
          <Text style={styles.txtupdate}>Add Parts</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export default MechanicAddSpareParts

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff"

  },
  text: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "StrickenBrush-D9a3",
    color: "#C2185B",
    marginTop: 60
  },
  txtinput: {
    marginHorizontal: 30,
    justifyContent: "space-evenly",
    marginVertical: 30,
    marginTop: 10
  },
  txttopinput: {
    marginHorizontal: 30,
    justifyContent: "space-evenly",
    marginVertical: 30,
    marginTop: 40
  },
  txtbtn: {
    marginHorizontal: 40,
    justifyContent: "space-evenly",
    marginVertical: 30,
    marginTop: 10,
    flexDirection: "row"
  },
  camera: {
    backgroundColor: '#C2185B',
    height: 45,
    width: 140,
    marginHorizontal: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  addspare: {
    backgroundColor: '#C2185B',
    height: 45,
    width: 180,
    marginHorizontal: 12,
    borderRadius: 10,
    marginLeft: 75,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtupdate: {
    textAlign: 'center',
    paddingTop: 5,
    color: '#ffffff',
    fontFamily: 'VioletWasteland-Bgw5',
    fontSize: 18,
    marginLeft: 10

  },
  Icon: {
    fontSize: 25,
    marginLeft: 10,
    color: "white"


  },
  Icongear: {
    fontSize: 25,
    marginLeft: 25,
    color: "white"
  }

})
