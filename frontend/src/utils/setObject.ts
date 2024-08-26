import { StorageValue } from '@/types/StorageValue';
import { Preferences } from '@capacitor/preferences';

export const setObject = async (key: string, value: StorageValue ) => {
    await Preferences.set({ key, value: JSON.stringify(value) });
}