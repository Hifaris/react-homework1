function App() {

    return (
        <div className = "stg">
         <div className = "image">
         <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"></img>
         </div>
         <div className = "textName">
         <h3>Julienne Moore</h3>
         <h3 style = {{color: "grey"}}>julianne.moore@company.com</h3>
         </div>
         <Follower />
        </div>
        
    )
}

function Follower() {

    return (
        <div className = "main" >
          <div>
            <h3>25</h3>
            <p>Posts</p>
          </div>
          <div>
            <h3>350</h3>
            <p>Following</p>
          </div>
          <div>
            <h3>1.5K</h3>
            <p>Follower</p>
          </div>

        </div>
    )
}

ReactDOM.createRoot(document.querySelector('.root'))
    .render(<App />)