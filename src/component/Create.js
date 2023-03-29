// import React from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react';
// import { useState } from 'react';
// import axios from 'axios';

// export default function Create() {
//     const [id, setId] = useState('');
//     const [name, setName] = useState('');
//     const [checkbox, setCheckbox] = useState(false);

//     const postData = () => {
//         console.log(id);
//         console.log(name);
//         console.log(checkbox);

//         const postData = () => {
//             axios.post(`https://jsonplaceholder.typicode.com/users`, {
//                 id,
//                 name,
//                 checkbox
//             })
//         }
// }
//   return (
//     <div>
//         <Form>
//         <Form.Field>
//             <label>id</label>
//             <input placeholder='id' onChange={(e) => setId(e.target.value)}/>
//         </Form.Field>
//         <Form.Field>
//             <label>name</label>
//             <input placeholder=' Name' onChange={(e) => setName(e.target.value)}/>
//         </Form.Field>
//         <Form.Field>
//             <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
//         </Form.Field>
//         <Button onClick={postData} type='submit'>Submit</Button>
//     </Form>
//     </div>
//   )
// }


