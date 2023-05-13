import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#17202a',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  brandContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 48,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 18,
    backgroundColor: '#a81c1b',
    marginBottom: 50,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5
  },
  label: {
    fontSize: 18,
    color: '#fff',
  }

})

export default styles;