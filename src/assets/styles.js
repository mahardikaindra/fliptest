import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  beneficiary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "rgba(0,0,0,0.5)"
 },
 cardItem: {
   backgroundColor: '#ffffff',
   margin: 5,
   borderRadius: 10,
   flexDirection: 'row',
   justifyContent: 'space-between',
   padding: 18,
   borderLeftWidth: 5,
   alignItems: 'center',
 },
 flatlist: {
   backgroundColor: '#f5f9f8',
 },
 icon: {
   marginHorizontal: 5,
 },
 status: {
   minHeight: 25,
   borderRadius: 7,
   paddingHorizontal: 10,
   justifyContent: 'center',
   backgroundColor: '#54b685'
 },
 statusFailed: {
   minHeight: 25,
   borderRadius: 7,
   paddingHorizontal: 10,
   justifyContent: 'center',
   backgroundColor: 'red'
 },
 statusCek: {
   minHeight: 25,
   borderRadius: 7,
   paddingHorizontal: 10,
   justifyContent: 'center',
   backgroundColor: '#ffffff',
   borderWidth: 1,
   borderColor: '#f6693e',
 },
 text: {
   fontSize: 16,
   fontWeight: '500',
   color: 'black',
 },
 textBankName: {
   fontSize: 16,
   fontWeight: 'bold',
   color: 'black',
 },
 textStatus: {
   fontSize: 12,
   fontWeight: 'bold',
   color: 'white',
 },
 textStatusCek: {
   fontSize: 12,
   fontWeight: 'bold',
   color: 'black',
 },
});

export default styles;
