import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
