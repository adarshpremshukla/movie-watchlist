// import React, { useState } from 'react';
// import { Container, Form, Button } from 'react-bootstrap';
// import '../../src/App.css'; 

// const Auth = ({ setUser, setPage }) => {
//   const [email, setEmail] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email) {
//       setUser(email);
//       setPage('home'); // Redirect to the Search page
//     }
//   };

//   return (
//     <div className="login-bg">
//       <Container className="mt-5  p-5">
//         <h2 className="text-danger text-center mb-3">Login</h2>
//         <Form onSubmit={handleLogin} className="text-center">
//           <Form.Group controlId="formBasicEmail" className="mb-3">
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-50 mx-auto"
//             />
//           </Form.Group>
//           <Button variant="danger" type="submit" className="w-50">Login</Button>
//         </Form>
//       </Container>
//     </div>
//   );
// };

// export default Auth;




import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../src/App.css'; 

const Auth = ({ setUser, setPage }) => {
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      setUser(email);
      setPage('home'); 
    }
  };

  return (
    <div className="login-bg">
      <div className="form-container">
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button className='loginbutton' variant="danger" type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Auth;
