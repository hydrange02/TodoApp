import { StyleSheet, Text, View } from 'react-native';

export default function ChillScreen({ route }: any) {
  const title = route.params?.title || route.name;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
});
