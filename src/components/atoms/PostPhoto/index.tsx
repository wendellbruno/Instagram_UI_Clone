import React from 'react';
import { Image, ImageProps } from 'react-native';

import {styles} from '../../../pages/Feed/styles'

export const PostPhoto: React.FC<ImageProps> = ({...resto}: ImageProps) => {
  return (
    <Image 
    {...resto}
    style={styles.cover} 
    />
  )

}
