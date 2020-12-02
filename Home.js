import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await Axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(data.slice(0, 10));
    };
    fetchPosts();
  });

  return (
    <View>
      {posts.map((post) => (
        <Link to={`/${post.id}`} key={post.id}>
          <Text>{post.title}</Text>
        </Link>
      ))}
    </View>
  );
};

export default Home;
