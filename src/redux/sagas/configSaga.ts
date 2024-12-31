import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeLatest, call, all, put, select } from 'redux-saga/effects';
import { initalConfig, updateConfig } from '../slices/configSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { ConfigState } from '../types';
import { ContantsStorage } from '../../storage/ContantsStorage';

function* handleUpdateConfig(action: PayloadAction<ConfigState>): Generator {
    try {
        const currentConfig: ConfigState = yield select((state: any) => state.config);

        // Kết hợp state hiện tại và payload mới
        const updatedConfig: ConfigState = {
            ...currentConfig,
            ...action.payload, // Override các giá trị mới
        };

        yield call(
            [AsyncStorage, 'setItem'],
            ContantsStorage.CONFIGURATION,
            JSON.stringify(updatedConfig) // Lưu dưới dạng JSON
        );

        yield put(initalConfig(updatedConfig));

    } catch (error) {
        console.error('Error saving config:', error);
    }
}

function* handleInitialConfig(action: PayloadAction<ConfigState>): Generator {
    try {
        const configStoage = yield call([AsyncStorage, 'getItem'], ContantsStorage.CONFIGURATION)
        if (configStoage) {
            yield put(initalConfig(JSON.parse(configStoage)));
        }
    } catch (error) { }
}

function* watchAll() {
    yield takeLatest(updateConfig.type, handleUpdateConfig)
    yield takeLatest(initalConfig.type, handleInitialConfig)
}

export default function* configSaga() {
    yield all([
        watchAll()
    ])
}