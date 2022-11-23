import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer'
import Languages from './UI/Header/Languages';

 function Layout({ children }) {
  return (
    <>
      <Header/>
      <main className='mx-[6%] my-8'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
