import React,{Component} from 'react'
import {Text,
    View,
TextInput,
StyleSheet,
TouchableOpacity} from 'react-native'


class Login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            Password:''
        }
    }
    _loginsub = async () => {
        if(this.state.email && this.state.Password ){
            await AsyncStorage.set('userToken');
            this.props.navigation.navigate('dash')

        }
        else {
            alert('Please Enter email and password')
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Login</Text>
                <View style={styles.body}>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Password" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({Password:text})}/>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>this._loginsub()}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')}>
                    <Text style={styles.loginText}>Don't have accout? Signup</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    loginBtn:{
        width:300,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      inputText:{
        height:50,
        color:"white"
      },
      inputView:{
        width:300,
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      body:{
          marginTop:20,
          marginBottom:20,
          backgroundColor:'#c2f0f0',
          padding:50
      },
      loginText:{
        alignSelf:'center'
      },
      headerText:{
          fontSize:30,
          fontWeight:'bold',
          marginBottom:40,
      }
})

export default Login