import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/commons/layout/Layout'
import Home from './pages/Home'
import Post from './pages/Post';
import Hero from './pages/Hero';

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Post/>}/>
          <Route path="/hero" element={<Hero/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
