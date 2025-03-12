import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const product = {
  sku: 'T000073620',
  name: 'Juust gouda jalapeno, NOPRI, 250 g',
  image: 'https://www.selver.ee/img/800/800/resize/4/7/4740218003856.jpg',
  product_main_ean: '4740218003856',
  product_volume: '250 g',
  description:
    'Jalapenod on ühed laialdasemalt kasutatavad tšillid. Jalapeno tugev aroom ja maitse annavad Nopri Gouda tüüpi juustule erilise vürtsika varjundi. Sobib ideaalselt näksimiseks või toiduvalmistamiseks',
  product_ingrediens:
    'Pastöriseeritud PIIM, jalapeno (1,5%), sool 1,5%, laap, juuretis. * Toote koostisosade loetelu võib muutuda. Kontrollige enne toote tarbimist pakendil esitatud koostisosi.',
  product_storage_cond_use: 'Temp +2..+20 °C',
  product_group_price: 3.99,
};

const ProductDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>€{product.product_group_price}</Text>
      <Text style={styles.volume}>Volume: {product.product_volume}</Text>
      <Text style={styles.ean}>EAN: {product.product_main_ean}</Text>
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      <Text style={styles.ingredients}>{product.product_ingrediens}</Text>
      <Text style={styles.sectionTitle}>Storage Conditions</Text>
      <Text style={styles.storage}>{product.product_storage_cond_use}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#333',
    marginBottom: 8,
  },
  volume: {
    fontSize: 16,
    color: '#666',
  },
  ean: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: '#444',
  },
  ingredients: {
    fontSize: 16,
    color: '#444',
  },
  storage: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
  },
});

export default ProductDetails;