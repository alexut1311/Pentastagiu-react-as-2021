import React, { useState } from 'react';
import Forms from '../../components/Forms';
import Name from '../../components/Name';

function Home(props) {
   const [count, setCount] = useState(0);
   const [email, setEmail] = useState("");

   const handleChangeEmail = (event) => {
      setEmail(event.target.value);
   }
   const handleSave = (event) => {
      alert("Email " + email)
      event.preventDefault();
   }

   return (
      <div>
         Hello home {count} {props?.name}
         <Name count={count} />
         Email: {email}
         <Forms handleSave={handleSave} text={email} handleChange={handleChangeEmail} />


         <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
   );
}

export default Home;