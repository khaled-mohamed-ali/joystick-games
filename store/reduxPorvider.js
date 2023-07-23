'use client'
import {Provider, useSelector} from 'react-redux'
import Store from './store'

import React from 'react';

export default function ReduxProvider({children}){
    return <Provider store={Store}>{children}</Provider>
};

