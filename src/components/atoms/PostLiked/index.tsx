import React from 'react';
import { Text, TextProps } from 'react-native';

import {styles} from '../../../pages/Feed/styles'

type Proprs = TextProps & {
    value: string;
}


export const PostLiked: React.FC<Proprs> = ({value}: Proprs) => {
  return (
    <Text style={styles.likes}>{value}</Text>
  )
}
