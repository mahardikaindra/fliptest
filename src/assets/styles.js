import {StyleSheet, Dimensions, Platform} from 'react-native';
const { width, height } = Dimensions.get('window');
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
   borderLeftWidth: 8,
   alignItems: 'center',
 },
 content: {
   alignItems: 'flex-start',
   width: '60%',
 },
 detailItem: {
   backgroundColor: '#ffffff',
   padding: 18,
 },
 detailRow: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginVertical: 18,
 },
 filter: {
   alignItems: 'center',
   flexDirection: 'row',
 },
 filterContainer: {
   flex: 0.3,
   alignItems: 'flex-end',
   justifyContent: 'flex-start',
 },
 filterItem: {
   margin: 10,
   flexDirection: 'row',
   alignItems: 'center',
 },
 flatlist: {
   backgroundColor: '#f5f9f8',
   marginBottom: 70,
 },
 icon: {
   marginHorizontal: 5,
 },
 inputContainer: {
   flex: 0.7,
   flexDirection: 'row',
   alignItems: 'center',
 },
 modalFilter: {
   backgroundColor: '#ffffff',
   width: width * 0.85,
   borderRadius: 10,
   padding: 20,
 },
 searchBar: {
   flexDirection: 'row',
   backgroundColor: 'white',
   minHeight: 50,
   alignItems: 'center',
   paddingHorizontal: 9,
   margin: 5,
   borderRadius: 10,
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
   borderWidth: 2,
   borderColor: '#f6693e',
 },
 text: {
   fontSize: 15,
   color: 'black',
   letterSpacing: 0.25,
   fontFamily: 'SourceSansPro-SemiBold',
 },
 textBold: {
   fontSize: 16,
   fontWeight: 'bold',
   color: 'black',
   fontFamily: 'SourceSansPro-Bold',
 },
 textBankName: {
   fontSize: 16,
   fontWeight: 'bold',
   color: 'black',
   fontFamily: 'SourceSansPro-Bold',
   letterSpacing: 0.5,
 },
 textClose: {
   fontSize: 16,
   color: '#f6693e',
   fontFamily: 'SourceSansPro-SemiBold',
 },
 textInput: {
   fontSize: 14,
   color: 'black',
   fontFamily: 'SourceSansPro-SemiBold',
   width: '100%',
 },
 textStatus: {
   fontSize: 12,
   fontWeight: 'bold',
   color: 'white',
   fontFamily: 'SourceSansPro-Bold',
 },
 textStatusCek: {
   fontSize: 12,
   color: 'black',
   fontWeight: Platform.OS === 'ios' ?'500' : '700',
   fontFamily: 'SourceSansPro-Bold',
 },
 topContent: {
   minHeight: 40,
   padding: 18,
   backgroundColor: '#ffffff',
   borderBottomWidth: 1,
   borderBottomColor: '#f5f9f8',
   flexDirection: 'row',
 },
 topNavigation: {
   minHeight: 40,
   padding: 18,
   backgroundColor: '#ffffff',
   borderBottomWidth: 2,
   borderBottomColor: '#f5f9f8',
   flexDirection: 'row',
   justifyContent: 'space-between',
 },
});

export default styles;
