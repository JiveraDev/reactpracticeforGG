import type React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";




// const credentialfoUser = [
//     {
//         username: "rivera",
//         password: "qwerty"
//     },
// ]



export function LoginForm(){

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  console.log("submitted!");
}

    return(
        <div className="modal fade" id="loginModal" onSubmit={handleSubmit} tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Login Page</h1>
      </div>

      <div className="modal-body">
        {/* <!-- form goes here --> */}
         <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </div>
    </div>
  </div>
</div>
    );
}