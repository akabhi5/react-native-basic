import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Link} from 'react-router-native';

const Post = ({match}) => {
  const [post, setPost] = useState({
    userId: '',
    id: '',
    title: '',
    body: '',
  });

  useEffect(() => {
    const fetchPost = async () => {
      const {data} = await Axios.get(
        `https://jsonplaceholder.typicode.com/posts/${match.params.id}`,
      );
      setPost(data);
    };
    fetchPost();
  }, [match]);

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{'\n'}</Text>
      <Text>{post.body}</Text>

      <Text>{'\n'}</Text>
      <Link to="/">
        <Text>GO BACK</Text>
      </Link>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
