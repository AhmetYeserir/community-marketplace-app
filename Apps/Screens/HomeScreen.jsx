import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import Categories from '../Components/HomeScreen/Categories';

export default function HomeScreen() {

  const db = getFirestore(app);
  const[sliderList,setSliderList]=useState([]);
  const[categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getSliders();
    getCategoryList();
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

  /**
   * Used to get Category List
   */
    const getCategoryList=async()=>{
      setCategoryList([]);
      const querySnapshot=await getDocs(collection(db, 'Category'));
      querySnapshot.forEach((doc)=>{
        console.log("Docs:",doc.data());
        setCategoryList(categoryList=>[...categoryList,doc.data()])
      })
    }

  return (
    <View className="py-8 px-6 bg-white flex-1">
      <Header/>
      {/* Slider */}
      <Slider sliderList={sliderList} />
      {/* Category List */}
      <Categories categoryList={categoryList} />
    </View>
  )
}