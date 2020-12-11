import React, {useState} from 'react';
import {Text, View, Switch} from 'react-native';
import styles from './CalendarToggle.style';



const CalendarToggle = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const ToggleButton = () => (
    <Switch
      style={styles.switch}
      trackColor={{ false: "rgba(255, 255, 255, 0.2)", true: "rgba(255, 255, 255, 0.2)" }}
      thumbColor={isEnabled ? "#F2994A" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );

  return (
    <View style={styles.row}>
      <Text style={styles.text}>Dạng bảng</Text>
      <ToggleButton/>
    </View>
  );
};

export default CalendarToggle;
