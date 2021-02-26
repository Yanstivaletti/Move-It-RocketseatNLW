import '../styles/global.css'
import {useState } from 'react';
import { ChallengesContext, ChallengesProvider } from '../context/ChallengesContext'
import { CountdownProvider } from '../context/CountdownContext';

function MyApp({ Component, pageProps }) {
  return (
       <Component {...pageProps} />
    )}

export default MyApp
