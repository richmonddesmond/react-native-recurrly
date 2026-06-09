import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const SubcriptionDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text> Subcription Details: {id} </Text>
      <Link href="/">Go back</Link>
    </View>
  )
}

export default SubcriptionDetails