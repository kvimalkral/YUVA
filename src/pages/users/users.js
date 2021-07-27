// // const axios = require('axios');
// import axios from 'axios';

// function Users(){

//     let responsedata = [];
  
    
//     const response = async() => {
//         const result = await  axios.get('http://localhost:4000/users');
//         responsedata = result.data
//         return result.data;
//     }
//    console.log();
   
//     return(
//         <div>

       
//         <div>
//         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Customer</button>


// <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">Add Customer</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//         <form autoComplete="off">
//             <div className="row m-0">
//         <div className=" col-md-6 mb-3">
//             <label htmlFor="salutation-name" className="col-form-label">Salutation:</label>
//             <select name="salutation"className="form-control">
//                 <option value="Mr">Mr</option>
//                 <option value="Miss">Miss</option>
//             </select>
//           </div>
//           <div className=" col-md-6 mb-3">
//             <label htmlFor="recipient-name" className="col-form-label">Customer Name:</label>
//             <input type="text" name="customerName" className="form-control" id="recipient-name" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="recipient-contact" className="col-form-label">Phone:</label>
//             <input type="text" name="phone" className="form-control" id="recipient-contact" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="recipient-email" className="col-form-label">Email:</label>
//             <input type="text" name="email" className="form-control" id="recipient-email" />
//           </div>
//           <div className=" col-md-6 mb-3">
//             <label htmlFor="message-address" className="col-form-label">Address:</label>
//             <textarea name="address" className="form-control" id="message-address"></textarea>
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="recipient-pincode" className="col-form-label">Pincode:</label>
//             <input type="number" name="pinCode" className="form-control" id="recipient-pincode" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="recipient-age" className="col-form-label">Age:</label>
//             <input type="number" name="age" className="form-control" id="recipient-age" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="recipient-vistedon" className="col-form-label">Visted On:</label>
//             <input type="date" name="vistedOn" className="form-control" id="recipient-vistedon" />
//           </div>
//           </div>
//         </form>
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Send message</button>
//       </div>
//     </div>
//   </div>
// </div>

// </div>
           
           
//             <div className="w-100">
//  <table className="table table-striped">
// <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//       <th>Action</th>
//     </tr>
//   </thead>
//   <tbody>
    
//     { 

// response()
// .then(sucess => {
//   sucess.map(element => {
        
//     <tr>
//   <th scope="row">{element.customerName}</th>
//   <td>{element.email}</td>
//   <td>{element.phone}</td>
//   <td>{element.pinCode}</td>
//   <td><button className="btn">View</button> <button className="btn">Edit</button> <button className="btn">Delete</button></td>
//   </tr>
    
//   }
// )
  
//     } 
  
  
// </tbody>
// </table>
//         </div>
//         </div>
       
//     )
// }


// export default Users;