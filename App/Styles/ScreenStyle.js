import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#103353',
    padding: 10
  },
  input: {
    padding: 10,
    margin: 10,
    width: 200,
    color: '#fff',
    height: 50,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#CEA36A',
    padding: 15,
    width: 300,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#103353',
    borderRadius: 15,
  },
  buttonText: {
    color: '#103353',
    fontSize: 20,
    fontWeight: 'bold',

  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#103353',
    elevation: 0,
    shadowOpacity: 0,
    alignContent: 'center',
  },
  headerText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'sans-serif-thin',
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  headerNewText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'sans-serif-thin',
    fontSize: 30,
  },
  list: {
    flex: 5,
  },
  inputContainer: {
    flex: 5
  },
  bottom: {
    flex: 1,
  }
})