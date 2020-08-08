import React, { Component} from 'react';
import{AppRegistry,StyleSheet, Text, View, Vibration, FlatList,Image,Button,TouchableOpacity,Modal, Alert} from 'react-native';
import flatListData from 'data/flatListData';
import Swipeout from 'react-native-swipeout';
import Header from '../components/header';

class FlatListItem extends Component{
    constructor(props){
        super(props); //hampir sama dgn 'this'
        this.state={
            activeRowKey :null
        };
    }
render(){
const swipeSettings ={
    autoClose :true,
    onClose :(secId, rowId, direction) =>{
        if(this.state.activeRowKey !=null){
        this.setState({activeRowKey :null});
        }
    },
    onOpen :(secId, rowId, direction) =>{
        this.setState({activeRowKey :this.props.item.key});
    },
    right :[
        {
            onPress :() =>{
                const deletingRow =this.state.activeRowKey;
                Alert.alert(
                'Alert',
                'Apakah yakin ingin Dihapus?',
                [
                    {text :'No', onPress :() =>console.log('Cancel Passed'),style :'cancel'},
                    {text :'Yes', onPress :()=>{
                        flatListData.splice(this.props.index,1);
                        this.props.parentFlatList.refreshFlatList(deletingRow);
                    }},
                ],
                {cancelable :true}
                )
            },
            text : 'Delete', type : 'delete'
        }
    ],
    rowId : this.props.index,
    sectionId :1
};

        return(
<Swipeout {...swipeSettings}>
        <View style={{
                flex:1,
                flexDirection:'column'
            }}>
            <View style={{flex:1,
                flexDirection:'row',
            // backgroundColor: this.props.index% 2 ==0 ?'yellow':'red'
             backgroundColor:'limegreen'}}>
                 <Image
                 source ={{uri:this.props.item.imageUrl}}
                 style={{width:100, height:100, margin:5, borderRadius:10,justifyContent: "center" }}>
                 </Image>
                 <View style={{
                     flex:1,
                     flexDirection:"column"
                 }}>
                <Text style={styles.FlatListItem}> {this.props.item.name} </Text>
                <Text style={styles.description}> {this.props.item.description} </Text>
            </View>
            </View> 
            <View
            style={{
                height:2,
                backgroundColor:'white'
            }}>

            </View>
            </View>
</Swipeout>
        )
    }
}

const styles = StyleSheet.create({
FlatListItem:{
    color:'black',
    padding: 10,
    fontSize: 20,
    fontWeight:'bold',
    color:'red',
    justifyContent: "center"

},
description :{
    alignContent :'center'
}

});
export default class BasicFlatlistData extends Component {
//Untuk Mereflesh secara Otomatis ketika data nya berubah
    constructor(props){
        super(props);
        this.state =({
            deletedRowKey :null,
        });
    }
 //refresh manggil dari atas   
    refreshFlatList =(deletedKey) =>{
        this.setState((prevState) =>{
            return{
                deletedRowKey :deletedKey
            };
        });
    }
render(){
return(
<View style={{flex:1, backgroundColor:'black'}}>
<Header/>
    <FlatList 
        data={flatlistData}
        renderItem={({item,index}) =>{ 
            return (
    <FlatListItem item={item} index={index} parentFlatList ={this}></FlatListItem>
        );
        }}>
    </FlatList>
    </View>
        )
    }
}
