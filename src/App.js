import { useState } from 'react';
import './App.css';



function App() {

   const [formData, setFormData] = useState({
      senderId: "",
      authToken: "",
      receiverId: "",
      message: "",
      files: "",


   });
   const handleInputChange = (e) => {

      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });

   }

   function handleSubmit(e) {
      e.preventDefault();

      sendFormDataToAPI(formData)

   }

   // Define the URL to which you want to send the POST request
   // const API_URL = 'https://api.botmastersender.com/api/v2/?action=send';


   function sendFormDataToAPI(formData) {

      fetch('https://api.botmastersender.com/api/v2/?action=send', {
         method: 'POST',
         headers: {


            'Content-Type': 'multipart/form-data'
         },
         body: formData
      }).then((result) => {
         // console.log(result);
         if (result?.status === 200) {
            alert('Send Successfully!')
         } else {
            alert("something went wrong");
         }
         result.json().then((res) => {
            console.log(res);
         })
      });

   }


   return (
      <div className='App'>
         <h1>Messaging App</h1>
         <form onSubmit={handleSubmit}>
            <label htmlFor='text1'>senderId:</label>
            <input type='text' name="senderId" value={formData.senderId} id="text1" onChange={handleInputChange} /><br />
            <label htmlFor='token'>authToken:</label>
            <input type='text' name="authToken" value={formData.authToken} id="token" onChange={handleInputChange} /><br />
            <label htmlFor='text'>receiverId:</label>
            <input type='text' name="receiverId" value={formData.receiverId} id="text" onChange={handleInputChange} /><br />
            <div>
               <label htmlFor='text3'>Message:</label><br />
               <textarea type='text' name="message" rows='10' cols='50' id="text3" value={formData.message} onChange={handleInputChange} /><br />
               {/* <button type='submit' >Send Message</button> */}
            </div>
            <div>
               <input type='file' name='files' value={formData.files} onChange={handleInputChange} />
               <button type='submit' >Send File</button>
            </div>

         </form>




      </div>
   )

}


export default App;
