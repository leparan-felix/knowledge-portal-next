// src/data/mockArticles.ts
export const articles = [
  {
    _id: '1',
    title: 'Introduction to Knowledge Management',
    slug: 'intro-to-knowledge-management',
    category: 'Management',
    excerpt: 'This is a simple article explaining knowledge management systems...',
    content: `
      <p>Knowledge management is the process of creating, sharing, using and managing the knowledge and information of an organization.</p>
      <p>It refers to a multidisciplinary approach to achieve organizational objectives by making the best use of knowledge.</p>
      <h3>Key Benefits</h3>
      <ul>
        <li>Improved organizational agility</li>
        <li>Better decision making</li>
        <li>Increased collaboration</li>
      </ul>
    `,
    publishedAt: '2026-03-20',
  },
  {
    _id: '2',
    title: 'Why Headless CMS Matters',
    slug: 'why-headless-cms-matters',
    category: 'Technology',
    excerpt: 'Headless CMS separates content from frontend, giving flexibility...',
    content: `
      <p>A headless CMS is a back-end content management system where the content repository is decoupled from the presentation layer.</p>
      <p>This allows developers to build frontends using any technology they prefer, such as Next.js, React, or Vue.</p>
    `,
    publishedAt: '2026-03-21',
  },
  {
    _id: '3',
    title: 'Effective Remote Work Strategies',
    slug: 'effective-remote-work-strategies',
    category: 'Workplace',
    excerpt: 'Remote work requires discipline, communication, and the right tools...',
    content: `
      <p>Remote work has become increasingly popular. To succeed, teams need clear communication channels and trust.</p>
      <p>Tools like Slack, Zoom, and Notion are essential for maintaining productivity.</p>
    `,
    publishedAt: '2026-03-22',
  },
  {
    _id: '4',
    title: 'Financial Planning for Startups',
    slug: 'financial-planning-for-startups',
    category: 'Finance',
    excerpt: 'Startups need to manage cash flow, budgeting, and fundraising effectively...',
    content: `
      <p>Financial planning is crucial for startups to ensure they have enough runway to grow.</p>
      <p>Key aspects include budgeting, forecasting, and understanding your burn rate.</p>
    `,
    publishedAt: '2026-03-23',
  }
]