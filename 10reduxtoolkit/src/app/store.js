// when we want to create store first we have to import configure store from redux-js 

import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
})