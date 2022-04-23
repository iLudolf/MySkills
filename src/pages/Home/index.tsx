import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  StatusBar
} from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

interface skillDate {
  id: string;
  name: string;
}

export function Home() {

  const [newSkills, setNewSkills] = useState('');
  const [mySkills, setMySkills] = useState<skillDate[]>([]);

  const handleAddNewSkills = () => {
    try {

      const data = {
        id: String(new Date().getTime()),
        name: newSkills
      }

      setMySkills(oldState => [...oldState, data])
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldState => oldState.filter(
      element => element.id !== id
    ))
  }

  return (
    <View style={styles.conteiner}>

      <Text style={styles.text}>
        Welcome, Israel Ludolf
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skills"
        placeholderTextColor="#555"
        onChangeText={setNewSkills}
      />

      <Button
        onPress={handleAddNewSkills}
        title={"Add"}
      />



      <Text style={[styles.text, { marginTop: 50 }]}>
        My Skills
      </Text>

      <View
        style={{
          marginTop: 15,
          marginBottom: 30,
          borderBottomColor: '#fff',
          borderBottomWidth: 1,
        }}
      />

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skillName={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />



    </View>
  );
}



const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
  },
  conteiner: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: '#121015',
  },
  input: {
    color: "#fff",
    backgroundColor: "#1f1e25",
    fontSize: 18,
    padding: Platform.OS == "ios" ? 15 : 10,
    marginTop: 10,
    borderRadius: 7
  },

});