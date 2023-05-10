import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: 'AIzaSyB-t8CpOhKnJ0MAJtaut61cf3OwMBLaWCQ',
    authDomain: 'invoicing-1a197.firebaseapp.com',
    projectId: 'invoicing-1a197',
    storageBucket: 'invoicing-1a197.appspot.com',
    messagingSenderId: '341482295174',
    appId: '1:341482295174:web:78b6894ef2f6e8514e2607',
    measurementId: 'G-BBME74N0V1',
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analystics = firebase.analytics();

function App() {
    const [user] = useAuthState(auth);

    return (
        <div className='App'>
            <header className='App-header'></header>
            {user ? <Invoices /> : <SignIn />}
        </div>
    );
}

export default App;
