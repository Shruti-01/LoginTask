import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';

class DashBoard extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.text}>Welcome to</Text>
                    <Text style={styles.text}>Chit Fund</Text>
                </View>  
            <BottomNavigation style={styles.bottom}>
            <BottomNavigation.Action
                key="chits"
                icon="contact-page"
                label="Chits"
                onPress={() => this.setState({ active: 'chits' })}
            />
            <BottomNavigation.Action
                key="users"
                icon="people"
                label="Users"
                onPress={() => this.setState({ active: 'Users' })}
            />
            <BottomNavigation.Action
                key="notification"
                icon="notifications"
                label="Notification"
                onPress={() => this.setState({ active: 'Notification' })}
            />
            <BottomNavigation.Action
                key="account"
                icon="account-circle"
                label="Account"
                onPress={() => this.setState({ active: 'Accounts' })}
            />
        </BottomNavigation>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    top:{
        flex:3,
        justifyContent:'center'
    },
    bottom:{
        flex:1
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    }
})
export default DashBoard