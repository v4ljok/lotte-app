import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const BinScreen = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Milk', category: 'Dairy' },
    { id: '2', name: 'Bread', category: 'Bakery' },
    { id: '3', name: 'Apples', category: 'Fruits' },
  ]);

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    Alert.alert('Clear all items?', 'Are you sure you want to clear your list?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', onPress: () => setItems([]), style: 'destructive' },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() =>
          Alert.alert('Remove item', `Remove "${item.name}" from the list?`, [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Remove', onPress: () => removeItem(item.id), style: 'destructive' },
          ])
        }
      >
        <Feather name="x-circle" size={22} color="#D00" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shopping List</Text>

      {items.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={clearAll}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your shopping list is empty.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  clearBtn: {
    alignSelf: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  clearText: {
    color: '#555',
    fontWeight: '600',
  },
  list: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  removeBtn: {
    padding: 4,
  },
  emptyText: {
    marginTop: 32,
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
  },
});

BinScreen.propTypes = {
  // Add any props if needed in the future
};

export default BinScreen;