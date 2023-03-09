import { SafeAreaView, Pressable, Text, StyleSheet, Modal } from 'react-native';
import React, {useState} from 'react';
import { Userform } from './src/components/Userform';
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUserForm, setModalUserForm] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Registrate en la {""}
        <Text style={styles.titleBold}>UAM</Text>
      </Text>

      <Pressable onPress={()=>setModalVisible(true)} style={styles.btnNewUser}>
        <Text style={styles.titleBold}>Nuevo usuario</Text>
        <Userform modalUserForm ={modalUserForm}></Userform>
      
      </Pressable>
      
      <Pressable onPress={()=>setModalVisible(true)} style={styles.btnNewUser}>
        <Text style={styles.titleBold}>Nuevo usuario</Text>
        <Userform modalUserForm ={modalUserForm}></Userform>
      </Pressable>
      
      <Modal animationType='slide' visible={modalVisible}>
        <Text>Desde modal </Text>
      </Modal>  
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0069A3',
    flex : 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FFFFFF',
  },
  titleBold: {
    fontWeight: '900',
    color :'#F4D73B'
  },
  btnNewUser :{
    backgroundColor: '#F4D73B',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
  },
  titleButton: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
  },

});
