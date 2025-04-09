import React from 'react';

const ClimateInsights = () => {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#3f51b5',
    padding: '20px',
  };

  const sectionStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>Climate Insights</h1>
      </header>

      <main>
        <section style={sectionStyle}>
          <h2>Latest Research on Climate Change</h2>
          <p>Stay updated with the latest research and insights on climate change and its impact.</p>
          <article>
            <h3>The Global Warming Trend</h3>
            <p>Explore the latest findings on global warming and its long-term effects on the environment...</p>
            <a href="#">Read More</a>
          </article>
          <article>
            <h3>Impact of Rising Sea Levels</h3>
            <p>Discover how rising sea levels are affecting coastal cities and ecosystems globally...</p>
            <a href="#">Read More</a>
          </article>
        </section>
      </main>

      <footer>
        <div>
          <div>
            <a href="/climate-insights">Climate Insights</a>
            <a href="/sustainability-tips">Sustainability Tips</a>
            <a href="/reports-data">Reports & Data</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <p>&copy; 2025 Climate Impact Tracker | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ClimateInsights;
