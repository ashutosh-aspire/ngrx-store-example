import { ToDos } from '../todos/models/todos';

const initialState: ToDos = {
    id: '1',
    todo: 'initial to do'
};

export function reducer(state: ToDos[] = [initialState], action: any) {
    switch (action.type) {
        case 'Todos_Create':
            return [...state, action.payload];

        case 'Todos_Delete':
            return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
}
