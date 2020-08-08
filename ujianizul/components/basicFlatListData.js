import React, { Component} from 'react';
import{AppRegistry,StyleSheet, Text, View, Vibration, FlatList,Image,TouchableOpacity,Modal,Alert,TouchableHighlight} from 'react-native';
import flatlistData from '../data/flatListData';
import Header from '../components/header';

class FlatListItem extends Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection:'column',
                backgroundColor:'white'
            }}>
            <View style={{flex:1,
                flexDirection:'row',
            // backgroundColor: this.props.index% 2 ==0 ?'yellow':'red'
             backgroundColor:'blue'}}>
                 <Image
                 source ={{uri:this.props.item.imageUrl}}
                 style={{width:100, height:100, margin:5, borderRadius:10 }}>
                 </Image>
                 <View style={{
                     flex:1,
                     flexDirection:"column"
                 }}>
               <TouchableOpacity onPress={()=> {this.setState({show:false})} }>
                <Text style={styles.FlatListItem}> {this.props.item.name} </Text>
                <Text style={styles.description}> {this.props.item.description} </Text>
                </TouchableOpacity>
            </View>
            </View> 
            <View
            style={{
                height:1,
                backgroundColor:'white'
            }}>

            </View>
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
FlatListItem:{
    color:'white',
    padding: 10,
    fontSize: 20,
    fontWeight:'bold'

},
description:{
    color:'white',
    padding: 10,
    fontSize: 12,

}

});
export default class BasicFlatlistData extends Component {
    render(){
        return(
            <View style={{flex:1, backgroundColor:'black'}}>
              <Header/>
                <View
            style={{
                backgroundColor:'yellow',
                height: 50,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <TouchableHighlight
                style={{marginRight:10}}
                underlayColor= 'blue'
                onPress={this._onPressAdd}
                >
                    <Image
                    style={{width:35, height:35}}
                    source={require('../icons/plus4.png')}
                    />
                    </TouchableHighlight>
                    </View>
<FlatList 
data={flatlistData}
renderItem={({item,index}) =>{ 
return (
<FlatListItem item={item} index={index}></FlatListItem>
                    );
                } }
                >
                </FlatList>
            </View>
        )
    }
}
