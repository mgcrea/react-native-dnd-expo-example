import {SafeAreaView, StyleSheet} from 'react-native';
import {DraggableBasicExample} from './src/pages/DraggableBasicExample';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <DraggableBasicExample />
        {/* <DraggableGridExample /> */}
        {/* <DraggableStackExample /> */}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
