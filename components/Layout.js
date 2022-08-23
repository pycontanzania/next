
import Header from './Header';
import Footer from './Footer'

 function Layout({ children }) {
  return (
    <>
      <Header/>
      <main className='mx-[6%] my-8 '>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
