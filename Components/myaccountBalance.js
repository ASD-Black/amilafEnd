import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    CheckBox
} from "react-native";

class myaccountBalance extends Component{
    
    render() {
        return (
            <View style={{ width: 220, height: 100, marginBottom: 80, borderWidth: 2, borderColor: '#49599a', paddingTop:5, flexDirection:'row', marginLeft:140, marginTop:-170, backgroundColor:'#7986cb'}}>
                <View >      
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{ fontSize: 18, paddingHorizontal:40, paddingVertical:10}}>Account Balance</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}> Rs :  {this.props.accBal}</Text>
                    <Text></Text>
                </View>
            </View>
        );
    }
}
export default myaccountBalance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});