import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Projects />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="pb-5">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <div class="clear"></div>
      {Footer()}
    </div>
  );
}
