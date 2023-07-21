import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    posts: {
        flex: 1,
      },
      postFooter: {
        width,
        paddingVertical: 15,
        paddingHorizontal: 10
      },
      post: {
        marginTop: 52
      },
});