import { ChatEngine } from 'react-chat-engine';
import './App.css'; 
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="0a1eae23-6c95-4680-bf4b-8a5067d82b5a"
            userName={localStorage.getItem('username')}
            userPassword={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />

    )

}

export default App;