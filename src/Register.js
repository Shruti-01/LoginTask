import React,{Component} from 'react'
import {Text,
    View,
TextInput,
StyleSheet,
TouchableOpacity} from 'react-native'


class Register extends Component{
    constructor(){
        super()
        this.state={
            fname:'',
            lname:'',
            email:'',
            password:'',
            cpassword:''
        }
    }

    _signupSub(){
        if(this.state.fname && this.state.email && this.state.password && this.state.cpassword){
            this.props.navigation.navigate('app')
        }
        else {
            alert('Please Enter all required feilds')
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Signup</Text>
                <View style={styles.body}>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="First name" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({fname:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Last Name" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({lname:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Password" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="confirm Password" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({cpassword:text})}/>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>this._signupSub()}>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText} onPress={()=>this.props.navigation.navigate('app')}>Already have account? Login</Text>
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
export default Register