import React from 'react';
import { Image, ImageProps } from 'react-native';

import {styles} from '../../../pages/Feed/styles'

export const PostLikedAvatar: React.FC<ImageProps> = ({...resto}: ImageProps) => {
  return (
    <Image 
    {...resto}
    style={styles.lastLiked} 
    />
  )

}
