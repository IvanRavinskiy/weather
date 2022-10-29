import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {weatherScreenStyles} from './styles';

export const WeatherView = () => {
  return (
    <SafeAreaView style={weatherScreenStyles.rootContainer}>
      <View>
        <Text>Omsk</Text>
        <View>
          <TouchableOpacity>
            <Text>F</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>C</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <Text>Change city</Text>
        </View>
        <View>
          <Text>My position</Text>
        </View>
      </View>
      <View>
        <Text>14</Text>
        <Text>Rain</Text>
      </View>
      <View>
        <View>
          <View>
            <Text>Wind</Text>
            <Text>5m/s west</Text>
          </View>
          <View>
            <Text>Pressure</Text>
            <Text>754 mm</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Humidity</Text>
            <Text>60%</Text>
          </View>
          <View>
            <Text>~Chance of rain</Text>
            <Text>10%</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
