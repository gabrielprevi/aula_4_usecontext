import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TelaFormulario from './src/telas/TelaFormulario'
import TelaLista from './src/telas/TelaLista'
import { Icon, Text } from "@rneui/base"
import { Button } from "react-native"


const Stack = createNativeStackNavigator();


  export default function App() {
  return (
    
<NavigationContainer>
  <Stack.Navigator
    initialRouteName="TelaList"
    screenOptions={{
      headerStyle:{
        backgroundColor:'green'
      }, headerTintColor: 'white'
    }}
>
    <Stack.Screen
    name= 'Tela list'
    component={TelaLista}
    options={({navigaion})=>{
      return{
        title:'TELA LISTAGEM',
        headerRight:()=>(
          <Button
          type='clear'
          icon={<Icon name= 'add' color='white' size={30}/>}
          onPress={()=>navigaion.navigate('TelaForm')}
          />
        )
      }
    }

  }
    />
  <Stack.Screen
    name="TelaForm"
    component={TelaFormulario}
    options={{title:'TELA FORMULARIO'}}
  />
  </Stack.Navigator>
</NavigationContainer>      
  );}