const initialStore = {
    profile: {
        name: 'Вася',
        age: '27',
        gender: 'M',
    },
}


export default function profileReduser(store = initialStore, action) {
           return store;
}
