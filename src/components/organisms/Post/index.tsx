import React from 'react';
import { View, ImageSourcePropType  } from 'react-native';

import {styles} from './styles'
import {PostHeader, PostOptions, PostAbout} from '../../molecules';
import {PostPhoto, PostDescription} from '../../atoms';
export type PostProps = {
    id: string;
    username: string;
    location: string;
    likes: string;
    cover: ImageSourcePropType;
    description: string;
    lastLiked: Profile;
}

type Profile = {
    id: string;
    name: string;
    avatar: ImageSourcePropType;
}

type Props ={
    data: PostProps;
}

export const Post: React.FC<Props> = ({data} : Props) => {
  return (
    
    <View style={styles.post}>

        <PostHeader username={data.username} location={data.location} />

        <PostPhoto source={data.cover}/>

        <View style={styles.postFooter}>
          
          <PostOptions />

          <PostAbout 
          avatar={data.lastLiked.avatar}
          likes={data.likes}
          />
          
          <PostDescription value={data.description} />
        </View>
        
      </View>
  )
}
