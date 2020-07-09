import React from 'react';
import Header from './components/Header/header'
import Video from './components/Video/video'
import {Provider} from 'react-redux'
import Store from './components/store/store'
import GlobalStyles from './global/global'


function App() {
  return (
    <Provider store={Store}>
        <GlobalStyles/>
        <Video/>
        <Header/>
    </Provider>
  );
}

export default App;
