import React from 'react';
import { View, Image, Text } from 'react-native';

import {ProfileIcon} from '../../../global/styles/icons';
import {PostAvatar, PostUserName, PostLocation} from '../../atoms';

type Props = {
    username: string;
    location: string;
}


import {styles} from '../../../pages/Feed/styles'

export const PostHeader: React.FC<Props> = ({username, location} :  Props) => {
  return(
    <View style={styles.postHeader}>
          <PostAvatar source={ProfileIcon} />
          <View>
            <PostUserName value={username} />
            <PostLocation value={location} />
          </View>
        </View>
  );
}
