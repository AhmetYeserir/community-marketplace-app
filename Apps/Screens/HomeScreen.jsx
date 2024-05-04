import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../../firebaseConfig';

export default function HomeScreen() {

  const db = getFirestore(app);
  const[sliderList,setSliderList]=useState([]);
  useEffect(()=>{
    getSliders();
  },[])

  /**
   * Used to Get Sliders for Home Screen
   */
  const getSliders=async()=>{
    setSliderList([])
    const querySnapshot = await getDocs(collection(db, "Sliders"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setSliderList(sliderList=>[...sliderList,doc.data()]);
  });
  }
  return (
    <View className="py-8 px-6 bg-white flex-1">
      <Header/>
      {/* Slider */}
      <Slider sliderList={sliderList} />
    </View>
  )
}