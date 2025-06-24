import { View, ViewProps, ScrollView, SafeAreaView } from 'react-native';

type Props = ViewProps & {
  children: React.ReactNode;
  scroll?: boolean;
};
// this container act as a global wrapper for screens to maintain common props
const ScreenContainer = ({ children, scroll = false, ...rest }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 30 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          {...rest}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
            paddingVertical: 50,
            backgroundColor: '#fff',
          }}
          {...rest}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ScreenContainer;
