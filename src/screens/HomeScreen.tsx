// src/screens/HomeScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/actions/postActions';
import { RootState, AppDispatch } from '../store';
import { useTranslation } from 'react-i18next';
import ScrollableText from '../components/ScrollableText';
import HorizontalScrollList from '../components/HorizontalScrollList';
import ParallaxCarousel from "../components/ParallaxCarousel";

const HomeScreen: React.FC = () => {
  // Use the AppDispatch type so that dispatch accepts thunks
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{t('error')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <ScrollableText /> */}
      <HorizontalScrollList />
      <ParallaxCarousel />
      <Text style={styles.header}>{t('dashboard')}</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FF9933'
    // padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 12,
    alignSelf: 'center',
    //backgroundColor:'#FF9933'
  },
  item: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#FF8C19'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
