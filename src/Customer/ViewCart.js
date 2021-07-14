import React,{ useState} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


const ViewCart = () => {
    const [list, setList] = useState([])
    const [totalprice, setTotalPrice]=useState([])
    const deleteCart = (item) => {
        console.log(`item`, item.code)
        database()
            .ref(`addToCart`+ item.code)
            .remove();

    };


    const getTotal=(total)=>{
        let sum=0;
        sum=sum+total.total
        console.log("sum",sum)

    }

   let id= auth().currentUser.uid
   var currentUser = auth().currentUser
   database().ref(`addToCart`).child(currentUser.uid).on('value', (snapshot) => {
   
            let li = []
            snapshot.forEach((child) => {
                let show = child.val().UserId
             
                if (show==id) {
                   
                   
                    li.push({
                       
                        name:child.val().name,
                        code:child.val().code,

                       
                        total:child.val().total,
                        price:child.val().price
                        // //CustomerLongitude:child.val().CustomerLongitude,


                        

                    })
                    
                }

            })
            


            setList(li)



        });
      //  let t=data.reduce((a,b)=>a.total+b.total,0);





    const RenderItem = (item) => {
       // console.log("names", item.total)
        return (
            <View>

                <View style={styles.touchcontainer}>
                    <Text style={styles.listtext}>Name:   {item.name}</Text>
                    <Text style={styles.listtext}>Code:  {item.code}</Text>
                    <Text style={styles.listtext}>price:  {item.price}</Text>
                    <Text style={styles.listtext}>total:  {item.total}</Text>
                    <View style={styles.iconcontainer}>
                        <Icons name="cross" style={styles.icondecline}
                            onPress={() => deleteCart(item)} />

                    </View>

                </View>


            </View>

        )
    }
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Cart</Text>
            <TouchableOpacity style={styles.confirmbtn} onPress={()=>NavigationPreloadManager.navigate("Checkout")}>
                <Text style={styles.txt}>Confirm</Text>
            </TouchableOpacity>
           
            <View style={styles.listcontainer}>

                <FlatList
                    data={list}
                    keyExtractor={(item) => item.total}
                    renderItem={({ item }) => (
                        RenderItem(item)
                    )}
                />


            </View>

        </View>
    )
}

export default ViewCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C3E4ED",

    },
    text: {
        fontSize: 35,
        textAlign: "center",
        marginTop: 30,
        fontFamily: "StrickenBrush-D9a3",
        color: "#C2185B"
    },
    listtext: {
        fontSize: 18,
        padding: 4,
        marginLeft: 10,
        color: "#ffffff"
    },
    listcontainer: {
        marginTop: 35,
        marginBottom: 65
    },
    touchcontainer: {
        borderWidth: 1.5,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "#C2185B",
        borderColor: "#000000",
        marginHorizontal: 10,
        elevation: 2,
        marginBottom: 16,
        elevation: 10,
        shadowOpacity: 90,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 15 }
    },

    iconaccept: {
        fontSize: 28,
        marginLeft: 5,
        color: "#fff",
        marginBottom: 5

    },
    icondecline: {
        fontSize: 28,
        marginLeft: 5,
        color: "#fff",
        marginBottom: 5,
        marginRight: 15,

    },
    iconcontainer: {
        flexDirection: "row-reverse",
        marginTop: 0

    },
   
    txt: {
        fontSize: 22,
        fontFamily: "StrickenBrush-D9a3",
        color: "#ffffff",
    
        paddingTop: 10,
        borderRadius: 30,
    
      },
      confirmbtn: {
        marginTop: 60,
        backgroundColor: "red",
        height: "9%",
        // width:"50%",
        marginHorizontal: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C2185B',
    
        elevation: 10,
        shadowOpacity: 90,
        shadowColor: '#000000',
        shadowRadius: 25,
        shadowOffset: { width: 100, height: 30 },
      }

})
