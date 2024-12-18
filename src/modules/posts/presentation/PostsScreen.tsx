import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {usePostsInjection} from '../DI/types';

export const PostsScreen = observer(() => {
  const viewModel = usePostsInjection('PostsViewModel');

  return (
    <SafeAreaView style={{flex: 1}}>
      {viewModel.isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={{padding: 16}}>
          <FlatList
            refreshing={viewModel.isRefreshing}
            onRefresh={() => viewModel.refresh()}
            showsVerticalScrollIndicator={false}
            data={viewModel.posts}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 4,
                    marginBottom: 6,
                    padding: 4,
                  }}
                  key={item.title}>
                  <Text
                    style={{
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      marginBottom: 2,
                    }}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize: 12}}>{item.body}</Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
});
