import { View, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

function ProfileScreen() {
  return (
    <ScreenContainer scroll>
      <View>
        <Text>Name</Text>
        <TextInput
          mode="outlined"
          keyboardType="default"
          placeholder="John Smith"
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          mode="outlined"
          keyboardType="email-address"
          placeholder="xyz@gmail.com"
        />
      </View>
      <View>
        <Text>Mobile number</Text>
        <TextInput
          mode="outlined"
          keyboardType="phone-pad"
          placeholder="Tushar Mishra"
        />
      </View>
      <View>
        <Text>Mobile number</Text>
        <TextInput
          mode="outlined"
          keyboardType="phone-pad"
          placeholder="Tushar Mishra"
        />
      </View>
      <View>
        <Text>Gender</Text>
        <Picker mode="dropdown">
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>
    </ScreenContainer>
  );
}

export default ProfileScreen;
