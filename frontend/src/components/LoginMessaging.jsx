const LoginMessaging = () =>  
(
    <div className="container app-container">
        <h1>You Must Be Logged In to view this page</h1>
        <p>To login, <a href="/login">Click Here</a></p>
        <p>To Create an Account, <a href="/create_account">Click Here</a></p>
    </div>
)



const TestFunction = (val1, val2) =>
{
    return <h1>TEST FUNCTION</h1>
}

export {
    LoginMessaging, 
    TestFunction
};
