/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import type {Node} from 'react';
import { Modal, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import styles from '../assets/styles';

const Loading: () => Node = (props) => {
  const { loadingProgress } = props.dataComponent;
  return (
    <Fragment>
      <Modal
        visible={loadingProgress}
        animationType="fade"
        transparent={true}>
        <View style={styles.centeredView}>
          <ActivityIndicator size="large" color="#FF5F00" />
        </View>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  dataComponent: state.dataComponent,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
