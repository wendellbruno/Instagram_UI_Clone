import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';

import {styles} from '../../../pages/Feed/styles'
import {PostLiked, PostLikedAvatar} from '../../atoms';


type Proprs = {
    avatar: ImageSourcePropType;
    likes: string;
}

export const PostAbout: React.FC<Proprs> = ({avatar, likes }: Proprs) => {
  return (
    <View style={styles.postAbout}>
            <PostLikedAvatar source={avatar}/>
            <PostLiked value={likes}/>
          </View>
  )
}
