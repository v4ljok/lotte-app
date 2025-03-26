import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Feather } from '@expo/vector-icons';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    dietaryRestrictions: {
      lactoseIntolerant: false,
      glutenFree: false,
      vegetarian: false,
      vegan: false,
      nutAllergy: false,
    },
    nutritionalPreferences: {
      lowFat: false,
      lowSugar: false,
      lowSalt: false,
      highProtein: false,
    },
    bjuPreferences: {
      proteins: 20, // grams per 100g
      fats: 20, // grams per 100g
      carbs: 50, // grams per 100g
    },
    fatContentPreference: 50, // 0-100 slider value
  });

  const toggleSwitch = useCallback((category, key) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key],
      },
    }));
  }, []);

  const updateBJUValue = useCallback((nutrient, value) => {
    setPreferences(prev => ({
      ...prev,
      bjuPreferences: {
        ...prev.bjuPreferences,
        [nutrient]: value,
      },
    }));
  }, []);

  const renderSection = useCallback((title, items, category) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {Object.entries(items).map(([key, value]) => (
        <View key={key} style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </Text>
            <Text style={styles.settingDescription}>
              {getSettingDescription(key)}
            </Text>
          </View>
          <Switch
            value={value}
            onValueChange={() => toggleSwitch(category, key)}
            trackColor={{ false: '#E0E0E0', true: '#6C63FF' }}
            thumbColor={value ? '#FFFFFF' : '#FFFFFF'}
          />
        </View>
      ))}
    </View>
  ), [toggleSwitch]);

  const renderBJUSection = useCallback(() => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>БЖУ на 100г</Text>
      {Object.entries(preferences.bjuPreferences).map(([nutrient, value]) => (
        <View key={nutrient} style={styles.bjuRow}>
          <View style={styles.bjuInfo}>
            <Text style={styles.bjuLabel}>
              {nutrient.charAt(0).toUpperCase() + nutrient.slice(1)}
            </Text>
            <Text style={styles.bjuValue}>{value}г</Text>
          </View>
          <Slider
            style={styles.bjuSlider}
            minimumValue={0}
            maximumValue={100}
            value={value}
            onValueChange={(newValue) => updateBJUValue(nutrient, newValue)}
            minimumTrackTintColor="#6C63FF"
            maximumTrackTintColor="#E0E0E0"
            thumbTintColor="#6C63FF"
          />
        </View>
      ))}
      <Text style={styles.bjuTotal}>
        Всего: {Object.values(preferences.bjuPreferences).reduce((a, b) => a + b, 0)}г
      </Text>
    </View>
  ), [preferences.bjuPreferences, updateBJUValue]);

  const getSettingDescription = useCallback((key) => {
    const descriptions = {
      lactoseIntolerant: 'Avoid products containing lactose',
      glutenFree: 'Avoid products containing gluten',
      vegetarian: 'Avoid meat and fish products',
      vegan: 'Avoid all animal products',
      nutAllergy: 'Avoid products containing nuts',
      lowFat: 'Prefer products with lower fat content',
      lowSugar: 'Prefer products with lower sugar content',
      lowSalt: 'Prefer products with lower salt content',
      highProtein: 'Prefer products with higher protein content',
    };
    return descriptions[key] || '';
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dietary Preferences</Text>
      
      {renderSection('Dietary Restrictions', preferences.dietaryRestrictions, 'dietaryRestrictions')}
      {renderSection('Nutritional Preferences', preferences.nutritionalPreferences, 'nutritionalPreferences')}
      {renderBJUSection()}
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fat Content Preference</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Preferred fat content: {preferences.fatContentPreference}%</Text>
          <View style={styles.sliderTrack}>
            <View 
              style={[
                styles.sliderFill, 
                { width: `${preferences.fatContentPreference}%` }
              ]} 
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={[styles.saveButton, styles.webContainer]}>
        <Text style={styles.saveButtonText}>Save Preferences</Text>
        <Feather name="check" size={20} color="#FFFFFF" style={styles.saveIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

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
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
  },
  bjuRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  bjuInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bjuLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  bjuValue: {
    fontSize: 16,
    color: '#6C63FF',
    fontWeight: '600',
  },
  bjuSlider: {
    width: '100%',
    height: 40,
  },
  bjuTotal: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'right',
  },
  sliderContainer: {
    paddingVertical: 12,
  },
  sliderLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  sliderTrack: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  sliderFill: {
    height: '100%',
    backgroundColor: '#6C63FF',
    borderRadius: 4,
  },
  saveButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  saveIcon: {
    marginLeft: 8,
  },
  webContainer: Platform.select({
    web: {
      cursor: 'pointer',
      userSelect: 'none',
    },
    default: {},
  }),
});

export default Preferences;