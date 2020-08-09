import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';


function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://avatars1.githubusercontent.com/u/50415018?s=460&u=97fc72792bdcedcbc05d4e8105dd18943ba1498b&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Carlos Moraes</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Eu sou Uhauhauha.
        {'\n'}{'\n'}
        Apaixonado por tecnologia
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '}
          <Text style={styles.priceValue}>R$ 99</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;