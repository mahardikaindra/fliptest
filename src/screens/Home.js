/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import styles from '../assets/styles';
import {ItemTransaction} from '../components';

const Home: () => Node = (props) => {
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    try {
      await props.isLoading(true);
      !isRefreshing && await setRefreshing(true);
      const result = await props.getTransactions();
      if (result) {
        await props.isLoading(false);
        !isRefreshing && await setRefreshing(false);
      }
    } catch (e) {
      await props.isLoading(false);
      !isRefreshing && await setRefreshing(false);
      console.log(e);
    } finally {
      await props.isLoading(false);
      !isRefreshing && await setRefreshing(false);
    }
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Render List Item
  const renderItem = ({item}) => (
    <ItemTransaction
      data={item}
      onPress={async (data) => {
        await props.setDetailTransaction(data);
        await props.navigation.navigate('Detail');
      }} />
  )

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        refreshing={isRefreshing}
        onRefresh={() => fetchingData()}
        data={props.dataTransaction.data}
        extraData={props.dataTransaction.data}
        renderItem={renderItem}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.flatlist} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  dataTransaction: state.dataTransaction,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
