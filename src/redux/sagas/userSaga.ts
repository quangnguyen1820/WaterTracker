import { takeLatest, call, put } from 'redux-saga/effects';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
} from '../slices/userSlice';

// Định nghĩa kiểu dữ liệu của user
interface User {
    id: number;
    name: string;
    email: string;
}

// Hàm giả lập API
const fetchUserFromAPI = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
};

// Worker Saga
function* handleFetchUser() {
    try {
        const user: User = yield call(fetchUserFromAPI); // Gọi API
        yield put(fetchUserSuccess(user)); // Dispatch thành công
    } catch (error) {
        if (error instanceof Error) {
            yield put(fetchUserFailure(error.message)); // Dispatch lỗi
        } else {
            yield put(fetchUserFailure('Unknown error occurred')); // Xử lý lỗi không xác định
        }
    }
}

// Watcher Saga
export default function* userSaga() {
    yield takeLatest(fetchUserRequest.type, handleFetchUser);
}