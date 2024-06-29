import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const usePersistentStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const fetchStoredValue = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setStoredValue(JSON.parse(value));
        }
      } catch (error) {
        console.error("Error fetching stored value:", error);
      }
    };

    fetchStoredValue();
  }, [key]);

  const setValue = async (value: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error("Error setting stored value:", error);
    }
  };

  return [storedValue, setValue] as const;
};

export default usePersistentStorage;
