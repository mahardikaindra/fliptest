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
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import styles from '../assets/styles';
import {ItemTransaction} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home: () => Node = (props) => {
  const [isRefreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    if (props.dataTransaction.data.length > 1) {
      setDataSource(props.dataTransaction.data);
    } else {
      setDataSource([]);
    }
  }, [props.dataTransaction.data]);

  useEffect(() => {
    if (searchText.length > 1) {
      searchData(searchText);
    } else {
      setDataSource(props.dataTransaction.data);
    }
  }, [searchText]);

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

  //Search Data
  const searchData = async(text) => {
    const filterData = await dataSource.filter((item) => {
      if (
          item.beneficiary_name.toLowerCase().includes(text.toLowerCase()) ||
          item.beneficiary_bank.toLowerCase().includes(text.toLowerCase()) ||
          item.sender_bank.toLowerCase().includes(text.toLowerCase()) ||
          item.amount.toString().toLowerCase().includes(text.toLowerCase())
        ) {
        return item;
      }
    })
    setDataSource(filterData)
  }

  // Render List Item
  const renderItem = ({item}) => (
    <ItemTransaction
      data={item}
      onPress={async (data) => {
        await props.setDetailTransaction(data);
        await props.navigation.navigate('Detail');
      }} />
  )

  const onSearch = (text) => setSearchText(text);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.searchBar}>
        <Icon name={'search-outline'} color={'gray'} size={24} style={styles.icon} />
        <TextInput value={searchText} placeholder={"Cari nama, bank atau nomial"} style={styles.textInput} onChangeText={onSearch}/>
        <View>
          <TouchableOpacity style={styles.filter} onPress={() => {}}>
            <Text style={styles.textClose}>{`urutkan`.toUpperCase()}</Text>
            <MaterialIcons name={'keyboard-arrow-down'} color={'#f6693e'} size={22} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={() => fetchingData()}
        data={dataSource}
        extraData={dataSource}
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
