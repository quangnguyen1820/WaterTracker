import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfigState, initialConfigState } from '../types';

const configSlice = createSlice({
    name: 'config',
    initialState: initialConfigState,
    reducers: {
        updateConfig: (state, action: PayloadAction<ConfigState>) => {
            const payload = action.payload;

            if (!payload || typeof payload !== 'object') {
                console.error('Invalid payload in updateConfig:', payload);
                return;
            }

            const configPayload = Object.entries(payload).forEach(([key, value]) => {
                if (key in state && value !== undefined) {
                    state[key as keyof ConfigState] = value as any;
                }
            });
        },
        initalConfig: (state, action: PayloadAction<ConfigState>) => {
            return action.payload
        }
    }
})

export const { updateConfig, initalConfig } =
    configSlice.actions;
export default configSlice.reducer;