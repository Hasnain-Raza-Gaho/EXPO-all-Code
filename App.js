import React from 'react'
import { View, Text ,TextInput,Image,ScrollView,Button,TouchableOpacity,FlatList} from 'react-native'

function App() {

  const DATA = [
    {
      name : "ali",
      conatct:"0200202",
      
    },
    {
      name : "asad",
      conatct:"0200202",
      
    },
    {
      name : "ali",
      conatct:"0200202",
      
    },
    {
      name : "omer",
      conatct:"0200202",
      
    }

    
  ];

  
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>



    {/* <Button onPress={()=>console.log("data")} title="On click"> </Button> */}

    <TouchableOpacity style={{backgroundColor:"red",width:100,marginTop:100,height:100}} activeOpacity={0.4} >
      <Text>Click</Text>
    </TouchableOpacity>
    <FlatList
        data={DATA}
        renderItem={(data )=>{
          console.log(data.item)
          return (
          <View style={{borderWidth:2,backgroundColor:"blue",borderColor:"red",borderStyle:"solid",marginTop:20}}>
          <Text style={{color:"white",fontSize:30}}>{data.item.name}</Text>
         <Text style={{color:"white",fontSize:30}}>{data.item.conatct}</Text>
         </View>
          )
        }}
        keyExtractor={(item) => item.id}
        // extraData={selectedId}
      />
    </ScrollView>
    
    </View>
  )
}

export default App