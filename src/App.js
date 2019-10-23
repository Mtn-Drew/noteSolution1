import React from 'react';
import {Route, Link} from 'react-router-dom';
import Header from './mainPage/Header'
import FolderMain from './mainPage/FolderMain'
import FolderNote from './notePage/FolderNote'
import NoteMain from './mainPage/NoteMain'
import NoteFolder from './folderPage/NoteFolder'
import NoteNote from './notePage/NoteNote'



class App extends React.Component {

  state = {
    notes: [],
    folders: []
  }


  render() {

  

  return (
    <main className='App'>
      {/* content goes here */}

      <Header />

        <Route path='/' exact component={FolderMain} />
        <Route path='/folder' component={FolderMain} />
        <Route path='/note' component={FolderNote} />

        <Route path='/' exact component={NoteMain} />
        <Route path='/folder' component={NoteFolder} />
        <Route path='/note' component={NoteNote} />


    </main>
  );
  }
}

export default App;