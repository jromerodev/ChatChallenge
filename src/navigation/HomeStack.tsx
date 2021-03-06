import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/HomeScreen';
import useTheme from '../hooks/useTheme';
import IconButton from '../components/shared/IconButton';
import {Scale} from '../utils';

interface HomeStackProps {}

const HomeStackNavigator = createStackNavigator();

const HomeStack = ({}: HomeStackProps) => {
  const {theme} = useTheme();
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="home"
        component={Home}
        options={({navigation}) => ({
          headerTitleStyle: {color: theme.$text},
          headerStyle: {backgroundColor: theme.$headerBackground},
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.openDrawer()}
              iconName="menu"
              customStyle={{
                padding: Scale.moderateScale(8),
                marginLeft: Scale.moderateScale(8),
              }}
            />
          ),
          headerRight: () => (
            <IconButton
              onPress={() => navigation.navigate('settings')}
              iconName="settings"
              customStyle={{
                padding: Scale.moderateScale(8),
                marginRight: Scale.moderateScale(8),
              }}
            />
          ),
        })}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
