import React from 'react';
import { Image, ImageProps } from 'react-native';

import {styles} from '../../../pages/Feed/styles'

export const PostAvatar: React.FC<ImageProps> = ({...resto}: ImageProps) => {
  return (
    <Image 
    {...resto}
    style={styles.postAvatar} 
    />
  )

}
