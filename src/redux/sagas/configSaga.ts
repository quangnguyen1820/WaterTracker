import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { initalConfig, updateConfig } from '../slices/configSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { ConfigState } from '../types';
import { ContantsStorage } from '../../storage/ContantsStorage';

function* handleUpdateConfig(action: PayloadAction<ConfigState>): Generator {
    const { key, value } = action.payload;
    try {
        yield call([AsyncStorage, 'setItem'], ContantsStorage.CONFIGURATION, JSON.stringify(action.payload))
    } catch (error) {
        console.error('Error saving config:', error);
    }
}

function* handleInitialConfig(action: PayloadAction<ConfigState>): Generator {
    try {

    } catch (error) {
        const configStoage = yield call([AsyncStorage, 'getItem'], ContantsStorage.CONFIGURATION)
        if (configStoage) {
            yield put(initalConfig(configStoage));
        }
    }
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