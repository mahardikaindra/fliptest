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
  TouchableOpacity,
  View,
  Text,
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
import {formatingBankName, formatRupiah, formatingDate, formatingStatus} from '../utils/utils';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Detail: () => Node = (props) => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { id, account_number, remark, beneficiary_name, beneficiary_bank, sender_bank, status, amount, completed_at, created_at, unique_code } = props.detailTransaction?.data;
  const colorStatus = status === 'SUCCESS' ? '#54b685' : '#f6693e';
  const statusTag = status === 'SUCCESS' ? styles.status : status === 'PENDING' ? styles.statusCek : styles.statusFailed;
  const statusText = status === 'SUCCESS' ? styles.textStatus : styles.textStatusCek;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.topContent}>
        <Text style={styles.textBold}>{`ID Transaksi #${id}`.toUpperCase()}</Text>
      </View>
      <View style={styles.topNavigation}>
        <Text style={styles.textBold}>{`Detail Transaksi`.toUpperCase()}</Text>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.textClose}>{`Tutup`}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailItem}>
        <View>
          <View style={styles.beneficiary}>
            <Text style={styles.textBankName}>{formatingBankName(sender_bank)}</Text>
            <Fontisto name={'arrow-right'} color={'black'} style={styles.icon} />
            <Text style={styles.textBankName}>{formatingBankName(beneficiary_bank)}</Text>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.content}>
              <Text style={styles.textBold}>{beneficiary_name.toUpperCase()}</Text>
              <Text style={styles.text}>{account_number.toUpperCase()}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.textBold}>{`nominal`.toUpperCase()}</Text>
              <Text style={styles.text}>{formatRupiah(amount)}</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.content}>
              <Text style={styles.textBold}>{`berita transfer`.toUpperCase()}</Text>
              <Text style={styles.text}>{remark.toUpperCase()}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.textBold}>{`kode unik`.toUpperCase()}</Text>
              <Text style={styles.text}>{unique_code}</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.content}>
              <Text style={styles.textBold}>{`waktu dibuat`.toUpperCase()}</Text>
              <Text style={styles.text}>{formatingDate(created_at)}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  detailTransaction: state.detailTransaction,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
