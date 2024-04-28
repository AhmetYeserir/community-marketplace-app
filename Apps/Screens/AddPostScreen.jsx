import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig';
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker';
import { getFirestore, getDocs ,collection} from "firebase/firestore";
export default function AddPostScreen() {
  const [image, setImage] = useState(null);
  const db = getFirestore(app);
  const[categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList();
  },[])
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
  /**
   * Used to Pick Image from Gallery
   */
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const onSubmitMethod=(value)=>{
    value.image=image;
    console.log(value)
  }
  return (
    <View className="p-10">
      <Text className="text-[27px] font-bold">Yeni Post Ekle</Text>
      <Text className="text-[16px] text-gray-500 mb-7">Yeni Post Oluştur ve Satışa Başla</Text>
      <Formik
        initialValues={{title:'',desc:'',category:'',address:'',price:'',image:''}}
        onSubmit={value=>onSubmitMethod(value)}
        validate={(values)=>{
          const errors={}
          if(!values.title)
          {
            console.log("Başlık Mevcut Değil");
            ToastAndroid.show('Başlık Gerekli',ToastAndroid.SHORT)
            errors.name="Başlık Gerekli"
          }
          return errors
        }}
      >
        {({handleChange,handleBlur,handleSubmit,values, setFieldValue,errors})=>(
         <View>

          <TouchableOpacity onPress={pickImage}>
          {image?
          <Image source={{uri:image}} style={{width:100,height:100,borderRadius:15}}  />
          :
          <Image source={require('./../../assets/images/placeholder.jpg')}
          style={{width:100,height:100,borderRadius:15}}
          />}

            </TouchableOpacity> 
            <TextInput
              style={styles.input}
              placeholder='Başlık'
              value={values?.title}
              onChangeText={handleChange('title')}
            />
            <TextInput
              style={styles.input}
              placeholder='Açıklama'
              value={values?.desc}
              numberOfLines={5}
              onChangeText={handleChange('desc')}
            />
            <TextInput
              style={styles.input}
              placeholder='Fiyat'
              value={values?.price}
              keyboardType='number-pad'
              onChangeText={handleChange('price')}
            />
            <TextInput
              style={styles.input}
              placeholder='Adres'
              value={values?.address}
              onChangeText={handleChange('address')}
            />

            {/* Category List Dropdown */}
            <View style={{borderWidth:1,borderRadius:10,marginTop:15}}>
        <Picker
          selectedValue={values?.category}
          className="border-2"
          onValueChange={itemValue=>setFieldValue('category',itemValue)}
        >
          {categoryList&&categoryList.map((item,index)=>(
               <Picker.Item key={index}
                label={item?.name} value={item?.name} />
          ))}
        </Picker>
        </View>

        <TouchableOpacity onPress={handleSubmit}
         className="p-4 bg-blue-500 rounded-full mt-10">
          <Text className="text-white text-center text-[16px]">Submit</Text>
        </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        paddingTop:15,
        marginTop:10,marginBottom:5,
        paddingHorizontal:17,
        textAlignVertical:'top',
        fontSize:17
    }
})