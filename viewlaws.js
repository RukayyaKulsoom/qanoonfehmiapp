import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { TouchableOpacity, Button, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { useTranslation } from "react-i18next";
import { ScrollView } from 'react-native';

const Viewlaws = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
 
  
  return (
    <View
      style={{
        flex:1,
        backgroundColor: 'white',
      }}>
       
 <ImageBackground resizeMode="cover" 
                    source={require('./images/aboutusbg.png')}
                    style={{ height: '100%', width: '100%' }}
                    >

<View style={{ width: '95%', height:'95%' ,borderRadius: 10, borderWidth:2, borderColor:'white', margin:10}}>
    <ScrollView>

 <View  style={{borderLeftWidth:0,borderRightWidth:0, borderTopWidth:0,width: '95%', height:'6%', borderWidth:1, borderColor:'white', margin:10}} onPress={()=>navigation.navigate('viewlaws')}>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}} >
        
    ضعیف العمر شہریوں کا قانون 
          </Text>
    
</View>
    <Text style={{ color:'white', padding: 10 , fontSize: 18}}>
    ضعیف العمر شہریوں کا قانون مجریہ 2021ئ برائے دارالحکومت اسلام آباد 

)	بزرگ شہری کو حاصل مراعات:
)	 مذکورہ بالا قانون کی رو سے عمر رسیدہ شہری سے مراد ایسا شخص ہے جس کی عمر 60 سال یا اس سے زیادہ ہو اور
	اسلام آباد کا رہا ئشی ہو جو کہ شہری کارڈ کے حصول کا اہل ہوگا جس کی بنیاد پر وہ عجائب گھر،پارکوں اور لائبریریوں
	 میں مفت داخل ہوسکتا ہے اور اسے مندرجہ ذیل مزید مراعات حاصل ہوں گی:-  
i)
 طبی علاج اور تشخیصی سہولیات اور ادویات کی قیمتوں میں رعایت ۔    
 ii)
مستحق عمر رسیدہ افراد کو مالی امداد ۔  
iii)
 اندرون ِ ملک ہوائی اور ریلوے کے سفر پر بیس فیصد رعایت۔    
 iv)
بے گھر اور محتاج شہریوں کے لیے تعمیر شدہ اولڈ ایج ہوم۔  
v)
 پولیس اسٹیشن میں سہولت کی فراہمی۔   
vi)
سالانہ آمدنی پر انفرادی انکم ٹیکس کی ادائیگی سے استثنٰی۔      
vii)
 جائیدادکی مشروط منتقلی کی صورت میںعدالتی مراعات۔  
 
)      	  پالیسی مرتب کرنے، عوامی آگاہی پیدا کرنے اور ان کے لیے فلاحی اقدامات کو عملی جامہ پہنانے کے لیے کونسل کا 	  قیام عمل میں لایا جائے گاجو کہ تین رکنی شکایتی کمیٹی برائے ازالہ شکایت تشکیل دے گی۔  
 )	ضعیف العمر شہری نان نفقے کے لئے بالغ قانونی وارث کے خلاف درخواست دے سکتے ہیں جو کہ اسلام آباد مصالحتی 	   قانون ِمجریہ 2017ء کے تحت قائم شدہ مصالحتی مراکز میں دی جائے گی۔  
)	عمر رسیدہ شہری کے کارڈ کا احترام نہ کرنے یا کونسل کی طرف سے جاری کردہ ہدایات پر عمل درآمد میںناکا م ہوجانے 	والے شخص کو پچاس ہزار روپے تک جرمانے کی  سزا  دی جاسکتی ہے۔  
)	 عمر رسیدہ شہری کو نقصان دہ جگہ پر چھوڑنے کی صورت میں متعلقہ شخص کو شکایت کمیٹی ایک لاکھ روپے 	جرمانے کی سزا دے سکتی ہے۔   
)	شکایت کمیٹی کے فیصلے سے متاثرہ شخص پندرہ دنوں کے اندر کونسل کے روبرو اپیل دائر کر سکے گا اورکونسل کا فیصلہ حتمی   	ہوگا۔ 	

										تنویر بدر ججہ 
									سیکشن آفیسر(قانون) 
									قانون و انصاف کمیشن آف پاکستان 									اسلام آباد 
						 


    </Text>
       </ScrollView>
</View>

</ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
 
 
})


export { Viewlaws }