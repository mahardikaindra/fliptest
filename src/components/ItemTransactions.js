/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../assets/styles';
import {formatingBankName, formatRupiah, formatingDate, formatingStatus} from '../utils/utils';
// import Icon from 'react-native-vector-icons/Fontisto';
// import Octicons from 'react-native-vector-icons/Octicons';

const ItemTransaction: () => Node = (props) => {
  const { beneficiary_name, beneficiary_bank, sender_bank, status, amount, completed_at } = props.data;

  const colorStatus = status === 'SUCCESS' ? '#54b685' : '#f6693e';
  const statusTag = status === 'SUCCESS' ? styles.status : status === 'PENDING' ? styles.statusCek : styles.statusFailed;
  const statusText = status === 'SUCCESS' ? styles.textStatus : styles.textStatusCek;

  return (
    <TouchableOpacity onPress={() => props.onPress(props.data)}>
      <View style={[styles.cardItem, {borderLeftColor: colorStatus }]}>
        <View>
          <View style={styles.beneficiary}>
            <Text style={styles.textBankName}>{formatingBankName(sender_bank)}</Text>
            {/*<Icon name={'arrow-right'} color={'black'} style={styles.icon} />*/}
            <Text style={styles.textBankName}>{formatingBankName(beneficiary_bank)}</Text>
          </View>
          <Text style={styles.text}>{beneficiary_name.toUpperCase()}</Text>
          <View style={styles.beneficiary}>
            <Text style={styles.text}>{formatRupiah(amount)}</Text>
            {/*<Octicons name={'dot-fill'} color={'black'} style={styles.icon} />*/}
            <Text style={styles.text}>{formatingDate(completed_at)}</Text>
          </View>
        </View>
        <View style={statusTag}>
          <Text style={statusText}>{formatingStatus(status)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemTransaction;
