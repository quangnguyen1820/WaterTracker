import { all } from 'redux-saga/effects';
import userSaga from './sagas/userSaga';
import configSaga from './sagas/configSaga';

export default function* rootSaga() {
    yield all([
        userSaga(), // Thêm các saga khác vào đây
        configSaga()
    ]);
}