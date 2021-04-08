import { useState, useEffect, Dispatch, SetStateAction } from "react";
import AsyncStorage from "@react-native-community/async-storage";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(initialState);
  const [storagedVerified, setStoragedVerified] = useState(false);

  useEffect(() => {
    if (storagedVerified) {
      async function setItem() {
        await AsyncStorage.setItem(key, JSON.stringify(state));
      }
      setItem();
    } else {
      async function getItem() {
        const storagedValue = await AsyncStorage.getItem(key);
        if (storagedValue) {
          const parsed = JSON.parse(storagedValue);
          if (parsed.colors) setState(parsed);
        }
      }
      getItem();
      setStoragedVerified(true);
    }
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
