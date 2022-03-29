import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/root";
import { countActions } from "../store/slice/countSlice";

export default function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.countSlice.count);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        onPress={() => dispatch(countActions.increase())}
        title="Increase"
        color="#841584"
      />
      <Button
        onPress={() => dispatch(countActions.decrease())}
        title="Decrease"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
