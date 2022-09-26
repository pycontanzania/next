import Header from './Header/Header';
import Footer from './Footer/Footer'

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
