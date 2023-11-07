import { useState } from 'react';
import './App.css';
// import Axios from 'axios';


function App() {
   const [senderId, setSenderId] = useState('');
   const [authToken, setAuthToken] = useState('');
   const [receiverId, setReceiverId] = useState('');
   const [message, setMessages] = useState('');
   const [files, setFiles] = useState('');
const [alldata,SetAllData]=useState({});



   // Define the data you want to send in the request body
//    const formData = new FormData();
//    formData.append('senderId', senderId)
//    formData.append('authToken', authToken)
//    formData.append('messageText', message)
//    formData.append('receiverId', receiverId)
//    formData.append('files', files)
let data = { files, senderId, authToken, message, receiverId };

function handleClick(e){
   e.preventDefault();
   
   SetAllData({...alldata,data})
   
}

   // Define the URL to which you want to send the POST request
   // const API_URL = 'https://api.botmastersender.com/api/v2/?action=send';

   // console.log(formData);

   fetch('https://api.botmastersender.com/api/v2/?action=send', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(alldata)
   }).then((result) => {
      console.log('result');
      if (result?.status === 200) {
         alert('Send Successfully!')
      } else {
         alert("something went wrong");
      }
      result.json().then((res) => {
         console.log(res);
      })
   });

   return (
      <div className='App'>
         <h1>Messaging App</h1>
         <form onSubmit={handleClick}>
         <label type='text'>senderId:</label>
         <input type='text' value={senderId} onChange={e => { setSenderId(e.target.value) }} /><br />
         <label typeof='token'>authToken:</label>
         <input type='text' value={authToken} onChange={e => { setAuthToken(e.target.value) }} /><br />
         <label type='text'>receiverId:</label>
         <input type='text' value={receiverId} onChange={e => { setReceiverId(e.target.value) }} /><br />
         <div>
            <lable type='text'>Message:</lable><br />
            <textarea type='text' rows='10' cols='50' value={message} onChange={e => { setMessages(e.target.value) }} /><br />
            <button type='button' onClick={''}>Send Message</button>
         </div>
         <div>
            <input type='file' value={files} onChange={e => { setFiles(e.target.value) }} />
            <button type='button' >Send File</button>
         </div>

         </form>

         


      </div>
   )

}


export default App;
