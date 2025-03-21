import { useState} from 'react';
import TextInput from "../TextInput";
import Tweet from '../Twitter';

export default function Index() {
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);
    const maxLength = 125;
    
    function onTextChange(event){
        const text = event.target.value;
        if (text.length <= maxLength){
            setText(text);
        }
    }
    
    function sendTweet(){
        setTweetList([...tweetList, text]);
    }
    
  return (
    <div>
      <h1>Tweet</h1>
      <div>
        <img src="" />
        <TextInput 
            placeholder={'O que está rolando?'} // Testo padrão que irá ser ensirido no textBox
            maxLength={maxLength} value={text} 
            onChange={onTextChange} 
        />
    </div>

    <div>
        <div>{text.length} / {maxLength}</div>
        <button onClick={sendTweet}>📨Twittar</button>      
    </div>

        <ul>
            {tweetList.map(tweet => {
                return(
                    <li><Tweet children={tweet}/></li>
                )
            })}
        </ul>
    </div>
  );
}
