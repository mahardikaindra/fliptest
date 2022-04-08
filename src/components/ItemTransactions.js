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
  View,
} from 'react-native';
import styles from '../assets/styles';
import Icon from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

const ItemTransaction: () => Node = (props) => {
  const { beneficiary_name, beneficiary_bank, sender_bank, status, amount, completed_at } = props.data;

  const formatingBankName = (name) => {
    if (name.length <= 4) {
      return name.toUpperCase();
    } else {
      const words = name.split(" ");
      for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      words.join(" ");
      return words;
    }
  }

  const formatingDate = (date) => {
    const bulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ]
    const slicing = date.slice(0,10);
    const format = new Date(slicing);
    const day = format.getDate();
    const month = format.getMonth();
    const year = format.getFullYear();
    return `${day} ${bulan[month]} ${year}`;
  }

  const formatRupiah = (number) => {
    const num = Number(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$&.");

    return `Rp${num}`;
  };

  const formatingStatus = (status) => {
    if (status === 'SUCCESS') {
      return 'Berhasil';
    } else if (status === 'PENDING') {
      return 'Pengecekan';
    } else {
      return 'Gagal';
    }
  }

  const colorStatus = status === 'SUCCESS' ? '#54b685' : '#f6693e';
  const statusTag = status === 'SUCCESS' ? styles.status : status === 'PENDING' ? styles.statusCek : styles.statusFailed;
  const statusText = status === 'SUCCESS' ? styles.textStatus : styles.textStatusCek;

  return (
    <View style={{backgroundColor: '#f5f9f8'}}>
      <View style={[styles.cardItem, {borderLeftColor: colorStatus }]}>
        <View>
          <View style={styles.beneficiary}>
            <Text style={styles.textBankName}>{formatingBankName(sender_bank)}</Text>
            <Icon name={'arrow-right'} color={'black'} style={styles.icon} />
            <Text style={styles.textBankName}>{formatingBankName(beneficiary_bank)}</Text>
          </View>
          <Text style={styles.text}>{beneficiary_name.toUpperCase()}</Text>
          <View style={styles.beneficiary}>
            <Text style={styles.text}>{formatRupiah(amount)}</Text>
            <Octicons name={'dot-fill'} color={'black'} style={styles.icon} />
            <Text style={styles.text}>{formatingDate(completed_at)}</Text>
          </View>
        </View>
        <View style={statusTag}>
          <Text style={statusText}>{formatingStatus(status)}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemTransaction;
