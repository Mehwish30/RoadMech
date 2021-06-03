import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { Button, Card, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { Item } from 'native-base';






const CustomerBuySpareParts = ({navigation}) => {

    const [list, setList] = useState([])
    const [quantity, setQuantity] = useState([])
    
   


    database()
        .ref(`SpareParts`)
        .on('value', snapshot => {
            let li = []
            //let list=[]
            snapshot.forEach((child) => {

                li.push({
                    AdminId: child.val().AdminId,
                    name: child.val().name,
                    price: child.val().price,
                    desc: child.val().desc,
                    image: child.val().image,
                   //quantity:setQuantity(quantity)
                 // counter:0
                


                })
               


            })
            //console.log('User data: ', snapshot.val());
            setList(li)

            // console.log(li)

        });
        const orderItem=(action,price)=>{
            let orderList=quantity.slice()
            let item=orderList.filter(a=>a.price==price)
            if(action=="+"){
                let orderList=quantity.slice()
                let item=orderList.filter(a=>a.price==price)
                if(item.length>0){
                    let newQty=item[0].qty+1
                    item[0].qty=newQty
                    item[0].total=item[0].qty*price
                }
                else{
                    const newItem={
                        qty:1,
                        price:price,
                        total:price
                    }
                    orderList.push(newItem)
                }
                setQuantity(orderList)
               // console.log(orderList[qty])
            }
            else{
                if(item.length>0){
                    if(item[0]?.qty>0){
                        let newQty=item[0].qty-1
                        item[0].qty=newQty
                        item[0].total=item[0].qty*price
                    }
                }
                setQuantity(orderList)


            }

        }
        const getOrderQuantity=(price)=>{
            let quantitys=quantity.filter(a=>a.price==price)
            if (quantitys.length > 0){
               
             console.log(quantitys[0].qty)
                return quantitys[0].qty
               
            }
                return 0
        
        }
    //    const getItemCount=()=>{
    //        let ItemCount=quantity.reduce((c,a,b)=>[a.qty+b.qty,0],0)
    //        console.log(ItemCount)
    //        return ItemCount

    //     }
       


    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const RenderItem = (item) => {
      
        return (
            <Card style={styles.card}>
                <Card.Title title={item.name} />

                <Card.Cover source={{ uri: item.image }} style={{ width: "100%", height: 200 }} />
                <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>{item.price}</Button>
                    <Button>add</Button>
                    <Icon name="pluscircleo" style={styles.icon} onPress={()=>orderItem("+",item.price)}/>
                    <Text style={styles.icon}>{getOrderQuantity(item.price)}</Text>
                    <Icon name="minuscircleo" style={styles.icon} onPress={()=>orderItem("-", item.price)}/>
                    

                    
                </Card.Actions>
            </Card>

        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.txtcontainer}>
                <Text style={styles.textStyle}>
                    Buy An Amazing Spare Parts!
          </Text>
          <Icon name="shoppingcart" style={styles.icon}  onPress={()=>navigation.navigate("ViewCart")} />
         
          </View>
          <View>

                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.search}
                />
            </View>
            <FlatList
                data={list}
                keyExtractor={(item) => item.price}
                renderItem={({ item }) => (
                    RenderItem(item)
                )}
            />

        </View>
    )
}

export default CustomerBuySpareParts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    textStyle: {
        fontSize: 22,
        marginLeft: 10,
        fontFamily: "StrickenBrush-D9a3",
        marginTop:12
    },
    search: {
        margin: 10,
        borderRadius: 12,
        marginTop: 10

    },
    card: {
        margin: 10,
        elevation: 2
    },
    txtcontainer:{
        flexDirection:"row"
    },
    icon:{
        fontSize:30,
        marginLeft:15
    }

})
