import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
        <Image source={require('./../../assets/images/login.jpeg')} 
            className="w-full h-[400px] object-cover"
        />    
        <View className="p-7 bg-white mt-[-20px] rounded-3xl shadow-md">
            <Text className="text-[30px] font-bold">İkinci El Satış Uygulaması</Text>
            <Text className="text-[18px] text-slate-500 mt-6">Kullanmadığınız ya da eskiyen eşyalarınızı satarak hem ihtiyacı olanlara yardımcı olabilir hem de para kazanabilirsiniz</Text>
            <TouchableOpacity onPress={()=>console.log("SignIn")} className="p-4 bg-blue-500 rounded-full mt-20">
                <Text className="text-white text-center text-[18px]">Hadi Başlayalım</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}