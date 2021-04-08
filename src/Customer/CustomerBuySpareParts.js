import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { Button, Card, Paragraph } from 'react-native-paper';



let data = [
    {
        id: 1,
        name: "Brake",
        price: "Rs 1000",
        image: require('../assets/lights.jpg'),
        desc: "Are you a distributor and looking for spare parts for the brakes of your car? Do you want to get your vehicle running and use it without worrying?Our Application is able to offer its clients a vast range of the right products to get your vehicle back on the road"

    },
    {
        id: 2,
        name: "Engine",
        price: "Rs 1200",
        image: require('../assets/engine.jpg'),
        desc: "Are you a distributor and looking for spare parts for the brakes of your car? Do you want to get your vehicle running and use it without worrying?Our Application is able to offer its clients a vast range of the right products to get your vehicle back on the road"

    },
    {
        id: 3,
        name: "Lights",
        price: "Rs 3000",
        image: require('../assets/lights.jpg'),
        desc: "Are you a distributor and looking for spare parts for the brakes of your car? Do you want to get your vehicle running and use it without worrying?Our Application is able to offer its clients a vast range of the right products to get your vehicle back on the road"

    },

]


const CustomerBuySpareParts = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const RenderItem = (item) => {
        return (
            <Card style={styles.card}>
                <Card.Title title={item.name} />
                
                <Card.Cover source={item.image} />
                <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>{item.price}</Button>
                    <Button>Place Order</Button>
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

                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.search}
                />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
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
        fontSize: 30,
        marginLeft: 12,
        fontWeight: "bold"
    },
    search: {
        margin: 10,
        borderRadius: 12,
        marginTop: 10

    },
    card:{
        margin:10,
        elevation:2
    }

})
