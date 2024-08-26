import { StorageValue } from '@/types/StorageValue';
import { Preferences } from '@capacitor/preferences';

export const getObject = async (key: string) : Promise<StorageValue> => {
    const { value } = await Preferences.get({ key });
    if (value) {
        return JSON.parse(value);
    }
    return [];
}