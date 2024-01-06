import '../assets/styles/nav.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import DyRender from './login';
import { Card, TextField } from '@mui/material';
import { Button } from '@mui/material';
import me from '../assest/me.png';
import you from '../assest/all.jpg';
import va from '../assest/va.png';
import {Cards, Popular} from './cards';
import cse from '../assest/cse.jpg';
import oip from '../assest/oip.jpg'
import Login from './signin';
import Register from './signup';
function Ls()
{
    return(
        <header>        <div style={{
            marginLeft: '590px',
            marginTop: '100px',
            backgroundColor: 'rgba(0, 0, 0, 0.633)',
            color: 'white',
            padding: '100px',
            width: '200px',
            borderRadius: '30px'
        }}>
            <h3 style={{
                textDecoration: 'UnderLine'
            }}>Logged In!!</h3>
            <form>
                <h2>Login succefully!</h2>
                <button><Link to='/'>Ok</Link></button>
            </form><br></br>
        </div>
        </header>

    )
}function Rs()
{
    return(
        <header>        <div style={{
            marginLeft: '590px',
            marginTop: '100px',
            backgroundColor: 'rgba(0, 0, 0, 0.633)',
            color: 'white',
            padding: '100px',
            width: '200px',
            borderRadius: '30px'
        }}>
            <h3 style={{
                textDecoration: 'Underline'
            }}>Booyah!</h3>
            <form>
                <h2>Registered successfully!</h2>
                <button><Link to='/Login'>Ok</Link></button>
            </form><br></br>
        </div>
        </header>

    )
}
// function Login()
// {
//     return(
//         <header>       
//             <img src={cse} className='m11'></img>
//              <div style={{
//             marginLeft: '590px',
//             marginTop: '100px',
//             backgroundColor: 'rgba(0, 0, 0, 0.633)',
//             color: 'white',
//             padding: '50px',
//             width: '300px',
//             borderRadius: '30px'
//         }} className='m10'>
//             <img src={va} height={80} width={290 } className='mp13'></img>
//             <h3 style={{
//                 textDecoration: 'Underline'
//             }}>Login</h3>
//             <form>
//                 <label>Username:
//                     <input type="text" />
//                 </label><br></br>
//                 <br></br>
//                 <label>Password:
//                     <input type="password" />
//                 </label>
//             <h6>Don't you have an account? <Link to='/register' className='m12'>Register</Link></h6>
//             </form>
//             <DyRender />
//         </div>
//         </header>

//     )
// }
function Home()
{
    return(
        <div className='mp9'>
            <img src={va} height={80} width={290 } className='mp2'></img>
            <img src={you} height={500} width={500} className='mp1'></img>
            <div className='mp3'>
            <h1 className='mp5'>Have your dreams in books</h1>
            <TextField
          id="filled-search"
          label="Search books📖"
          type="search"
          variant="filled"
        />
        <Button size="sm" className='mp4'>search🔍</Button>
        <p className='mp7'><b>TopRated Books</b></p>
        <p>Pride and Prejudice , 1984 by George Orwell</p>
        <p className='mp8'>Crime and Punishment ,  Hamlet , One Hundred Years of Solitude.....</p>
        
        </div>
        <br></br>
        <br></br>
        <Cards/>
        <div>
            <h1>About us</h1>
            <hr></hr>
            <p>
Certainly! Creating an "About Us" page for your e-books website is a great way to connect with your audience and convey the purpose and values of your platform. Here's a template you can use as a starting point:

About [Your Website Name]
Welcome to [Your Website Name], where words come to life and stories unfold. We are passionate about the written word and believe in the transformative power of literature. Our platform is a haven for book lovers, a virtual space where stories of all genres and styles find a home.

Our Mission
At [Your Website Name], our mission is to make the world of literature accessible to everyone. We strive to connect readers with captivating stories, diverse voices, and enriching content that sparks imagination and fosters a love for reading.

What Sets Us Apart
Curated Collection: We meticulously curate our e-book collection to bring you a diverse range of titles, from timeless classics to contemporary gems. Every book is handpicked for its quality and unique narrative.

User-Friendly Experience: We are committed to providing a seamless and enjoyable experience for our users. Our website is designed with you in mind, ensuring easy navigation, personalized recommendations, and a hassle-free reading experience.

Support for Authors: We believe in supporting and empowering authors. Our platform serves as a launchpad for both emerging and established writers, providing them with a platform to showcase their work and connect with readers.

Our Team
Meet the passionate individuals behind [Your Website Name]. Our team comprises avid readers, tech enthusiasts, and literary experts who share a common goal—to create a platform that celebrates the beauty of storytelling.

Connect With Us
We love hearing from our community! Whether you have feedback, suggestions, or just want to share your favorite books, feel free to contact us or connect with us on [social media platforms].

Thank you for being a part of the [Your Website Name] community. Together, let's embark on a journey through the enchanting world of books.

Happy Reading!</p>
        </div>
        </div>

        
    )
}
// function  Register()
// {
//     return(
//         <div>
//             <img src={oip} className='m15'></img>
//         <div style={{
//             marginLeft: '530px',
//             marginTop: '100px',
//             backgroundColor: 'rgba(0, 0, 0, 0.633)',
//             color: 'white',
//             padding: '70px',
//             width: '400px',
//             borderRadius: '30px'}} className='m14'>
//                 <img src={va} height={80} width={290 } className='mp13'></img>
//              <h3 style={{textDecoration: 'underline'}}>Register</h3>
//             <form>
//                 <label>FirstName:
//                     <input type="text" />
//                 </label><br></br>
//                 <br></br>
//                 <label>LastName:
//                     <input type="text" />
//                 </label>
//                 <br></br><br></br>
//                 <label>UserName:
//                     <input type="text" />
//                 </label>
//                 <br></br><br></br>
//                 <label>Password:
//                     <input type="Password" />
//                 </label>
//                 <br></br><br></br>
//                 <label>EMail:
//                     <input type="mail" />
//                 </label>
//                 <br></br>
//                 <br></br>
//                 <button><Link to='/rs' className='m12'>Register</Link></button>
//             </form><br></br>
//         </div>
//         </div>
//     )
// }
function Navbar()
{
    return (
        
        <Router>
            <div className='parentDiv'>
            <nav>
                <ul style={{
                    marginRight: '1110px'
                }}>
                    <img src={me} height={50} width={50}></img>
                    <li ><Link to='/' className='link'>HOME</Link></li>
                    <li ><Link to='/login' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>REGISTER</Link></li>

                </ul>
            </nav>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/ls' element={<Ls/>} />
                <Route exact path='/rs' element={<Rs/>} />
                <Route exact path='/pop' element={<Popular/>}/>
            </Routes>
        </Router>
        
    )
}
export default Navbar;