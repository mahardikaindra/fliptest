/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, useEffect, useState} from 'react';
import type {Node} from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import styles from '../assets/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Filter: () => Node = (props) => {
  const [indexItem, setIndexItem] = useState(props.filterView.index);
  useEffect(() => {
    if (props.filterView.index <= 4) {
      setIndexItem(props.filterView.index)
    }
  }, [props.filterView.index]);
  return (
    <Fragment>
      <Modal
        visible={props.visible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => props.onRequestClose()}>
          <TouchableOpacity style={styles.centeredView} onPress={() => props.onRequestClose()}>
              <View style={styles.modalFilter}>
                {props.data?.map((item, index) => {
                  return (
                    <TouchableOpacity key={item.id} onPress={() => props.onSelect(index, item.name)}>
                      <View style={styles.filterItem}>
                        <Icon
                          name={indexItem == index ?'radio-button-checked':'radio-button-off'}
                          color={indexItem == index ?'#f6693e':'grey'}
                          size={24}
                          style={styles.icon}
                          />
                        <Text style={styles.text}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
          </TouchableOpacity>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  filterView: state.filterView,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
