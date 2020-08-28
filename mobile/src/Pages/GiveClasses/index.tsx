import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, } from 'react-native';
import styles from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function GiveClasses(){
  const {goBack} = useNavigation();
  function handleNavigateBack(){
    goBack();
  }
  return (    
// img txt

    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={GiveClassesBgImage} style={styles.content}>
        <Text style={styles.title}>Quer ser um Proff?</Text>
        <Text style={styles.description}>
          Para começar, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fuga nisi ipsam quod consectetur dolorem fugit recusandae, aliquid minus. Est sequi molestiae sunt adipisci sint, incidunt quibusdam quaerat aliquam natus!
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}> Tudo bem</Text>
      </RectButton>
    </View>
  );
}


export default GiveClasses;