import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function Index() {
  const [history, setHistory] = useState([
    { id: '1', name: 'Milk', date: '2024-03-20 13:42' },
    { id: '2', name: 'Banana', date: '2024-03-19 19:15' },
    { id: '3', name: 'Cheese', date: '2024-03-18 09:25' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.product}>{item.name}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No scan history yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  product: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  emptyText: {
    marginTop: 32,
    fontSize: 16,
    textAlign: 'center',
    color: '#aaa',
  },
});