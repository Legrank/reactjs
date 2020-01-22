import update from 'react-addons-update';
import { SUCCESS_PROFILE_LOADING } from '../actions/profileActions';

const initialStore = {
    profile: {},
}


export default function profileReduser(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_PROFILE_LOADING: {
            return update(store, {
                profile: {$set: {
                        name: action.payload.name,
                        age: action.payload.age,
                        gender: action.payload.gender,
                    }
                }
            });
        }
        default:
            return store;
    }
}

