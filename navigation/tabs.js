import React from 'react';
import {View, Text,Image, TouchableOpacity} from 'react-native'
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import {Home} from "../ screens"
import {COLORS, icons} from "../constants"
const Tab = createBottomTabNavigator();
const CustomTabBar =(props)=>{
    if(ifIphoneX()){
    return(
    <View>
 <View style={{position:'absolute',
    bottom:0,
    left:0,
    right:0,
    height:30,
    backgroundColor:COLORS.white}}> </View>
    <BottomTabBar
    {...props.props}
    />
   
      </View>)
       }
       else{
           return(
        <BottomTabBar
        {...props.props}
        />
           )
       }
  
}
const Tabs = ()=>{
     return(
         <Tab.Navigator
         tabBarOptions={{
             showLabel:false,
             style:{
                 borderWidth:0,
                 backgroundColor:"transparent",
                elevation:0}
         }}
         tabBar={(props)=>(
             <CustomTabBar
             props = {props}/>
         )}>
             <Tab.Screen
             name="Home"
             component={Home}
             options={{
                 tabBarIcon:({focused})=>(
                     <Image
                     source={icons.cutlery}
                     resizeMode="contain"
                     style={{
                         width:25,
                         height:25,
                         tintColor:focused?COLORS.primary: COLORS.secondary
                     }}
                     />
                 )
                
             }}/>
               <Tab.Screen
             name="Search"
             component={Home}
             options={{
                 tabBarIcon:({focused})=>(
                     <Image
                     source={icons.search}
                     resizeMode="contain"
                     style={{
                         width:25,
                         height:25,
                         tintColor:focused?COLORS.primary: COLORS.secondary
                     }}
                     />
                 )
             }}/>
               <Tab.Screen
             name="Like"
             component={Home}
             options={{
                 tabBarIcon:({focused})=>(
                     <Image
                     source={icons.like}
                     resizeMode="contain"
                     style={{
                         width:25,
                         height:25,
                         tintColor:focused?COLORS.primary: COLORS.secondary
                     }}
                     />
                 )
             }}/>
               <Tab.Screen
             name="User"
             component={Home}
             options={{
                 tabBarIcon:({focused})=>(
                     <Image
                     source={icons.user}
                     resizeMode="contain"
                     style={{
                         width:25,
                         height:25,
                         tintColor:focused?COLORS.primary: COLORS.secondary
                     }}
                     />
                 )
               
             }}/>
         </Tab.Navigator>
     )
}

export default Tabs;
