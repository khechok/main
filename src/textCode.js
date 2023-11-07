// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function MessageApp() {
//    const [messages, setMessages] = useState([]);
//    const [newMessage, setNewMessage] = useState('');
//    const [selectedFile, setSelectedFile] = useState(null);

//    useEffect(() => {
//       loadMessages();
//    }, []);

//    const loadMessages = () => {
//       axios.get('YOUR_API_ENDPOINT/messages')
//          .then(response => {
//             setMessages(response.data);
//          })
//          .catch(error => {
//             console.error('Error loading messages:', error);
//          });
//    };

//    const sendMessage = () => {
//       axios.post('YOUR_API_ENDPOINT/messages', { text: newMessage })
//          .then(response => {
//             setMessages(prevMessages => [...prevMessages, response.data]);
//             setNewMessage(''); // Clear the input field
//          })
//          .catch(error => {
//             console.error('Error sending message:', error);
//          });
//    };

//    const handleFileChange = (event) => {
//       setSelectedFile(event.target.files[0]);
//    };

//    const sendFile = () => {
//       if (selectedFile) {
//          const formData = new FormData();
//          formData.append('file', selectedFile);

//          axios.post('YOUR_API_ENDPOINT/upload', formData)
//             .then(response => {
//                // Handle the response for file upload
//                console.log('File uploaded successfully:', response.data);
//             })
//             .catch(error => {
//                console.error('Error uploading file:', error);
//             });
//       }
//    };

//    return (
//       <div>x
//          <h1>Message App</h1>
//          <div>
//             <ul>
//                {messages.map(message => (
//                   <li key={message.id}>{message.text}</li>
//                ))}
//             </ul>
//          </div>
//          <div>
//             <input
//                type="text"
//                placeholder="Type your message"
//                value={newMessage}
//                onChange={e => setNewMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}>Send Message</button>
//          </div>
//          <div>
//             <input
//                type="file"
//                onChange={handleFileChange}
//             />
//             <button onClick={sendFile}>Send File</button>
//          </div>
//       </div>
//    );
// }

// export default MessageApp;



// useEffect(() => {
//    loadMessages();
// }, [])

// const loadMessages = () => {
//    axios.get(API_URL)
//       .then(response => {
//          setMessages(response.data);
//       })
//       .catch(error => {
//          console.error('Error loading messages:', error);
//       });
// };


// // Define the URL to which you want to send the POST request
// const API_URL = 'https://api.botmastersender.com/api/v2/?action=send';



// // Define the data you want to send in the request body
// const formData = new FormData();
//    formData.append('senderId', sender)
//    formData.append('authToken', token)
//    formData.append('messageText', messages)
//    formData.append('receiverId', receiver)
//    formData.append('files', sendFile)

// const sendMessage = () => {
//    let data = { sendFile, messages, receiver, token, sender };
//    console.log(data);

//    axios.post(API_URL, { text: newMessage })
//       .then(response => {
//          setMessages(prevMessages => [...prevMessages, response.data]);
//          setNewMessage(''); // Clear the input field
//       })
//       .catch(error => {
//          console.error('Error sending message:', error);
//       });
// };

// const handleFileChange = (e) => {
//    setSelectedFile(e.target.files[0]);
// };

// const sendFile = () => {
//    if (sendFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       axios.post(API_URL, formData)
//          .then(response => {
//             // Handle the response for file upload
//             console.log('File uploaded successfully:', response.data);
//          })
//          .catch(error => {
//             console.error('Error uploading file:', error);
//          });
//    }
// };


// // fetch(API_URL, {
// //    method: 'POST',
// //    headers: {
// //       'Accept': 'application/json',
// //       'content-type': 'application/json'
// //    },
// //    body: formData
// // }).then((result) => {
// //    // console.log('result');
// //    if (result?.status === 200) {
// //       alert('Send Successfully!')
// //    } else {
// //       alert("something went wrong");
// //    }
// //    result.json().then((res) => {
// //       console.log(res);
// //    })
// // });
// // }
