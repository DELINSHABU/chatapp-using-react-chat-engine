import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import  ChatFeed  from './components/ChatFeed';

import './App.css';

const App =() =>{
  if (!localStorage.getItem('username')) return <LoginForm />;
  return(
    <ChatEngine
			height='100vh'
			projectID='89234551-74ca-42a4-abd2-f7b2b2cc5b34'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
      renderChatFeed={( chatAppProps ) => < ChatFeed {...chatAppProps} /> }
		/>
  )
}

export default App;
