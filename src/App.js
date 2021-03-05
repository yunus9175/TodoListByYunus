import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './Component/Signin'
import SignUp from './Component/Signup'
import ForgetPassword from './Component/Forgetpassword'
import Contactus from './Component/Contactus'
import Aboutus from './Component/Aboutus'
import Todolist from './Component/Todolist'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserCards from './Component/UserCards';

toast.configure()
function App() {
  return (
    <div className="App">
  
         <Router>
         <Header/>
     <Switch>
     <Route path="/UserCards" component={UserCards} />
     <Route path="/Todolist" component={Todolist} />
     <Route path="/Signin" component={SignIn} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/Forgetpassword" component={ForgetPassword} />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/Aboutus" component={Aboutus} />
          
      </Switch>
      </Router>
    </div>
  );
}

export default App;
