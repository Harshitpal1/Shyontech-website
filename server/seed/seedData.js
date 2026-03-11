require('dotenv').config();
const mongoose = require('mongoose');
const Service = require('../models/Service');
const BlogPost = require('../models/BlogPost');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/shyontech';

const services = [
  {
    title: 'Web Development',
    shortDescription: 'Professional web solutions using PHP, Laravel, and WordPress.',
    description:
      'We build robust, scalable web applications using industry-leading technologies. Our team specializes in PHP, Laravel framework, and WordPress CMS to deliver custom websites and web portals tailored to your business needs. From simple landing pages to complex e-commerce platforms, we handle it all.',
    category: 'Web Development',
    icon: 'Globe',
    techTags: ['PHP', 'Laravel', 'WordPress', 'MySQL'],
    featured: true,
    order: 1,
  },
  {
    title: 'Full Stack Development',
    shortDescription: 'End-to-end development with React, Node.js, and modern tools.',
    description:
      'Our full stack development service covers everything from intuitive React frontends to powerful Node.js backends. We create complete web applications with RESTful APIs, database integration, authentication systems, and cloud deployment — delivering a seamless user experience from start to finish.',
    category: 'Web Development',
    icon: 'Layers',
    techTags: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    featured: true,
    order: 2,
  },
  {
    title: 'Android App Development',
    shortDescription: 'Native and hybrid Android applications for your business.',
    description:
      'We design and develop high-performance Android applications that engage users and drive business growth. Our mobile development expertise covers native Android using Java/Kotlin and cross-platform solutions. From UI/UX design to Play Store deployment, we manage the entire lifecycle.',
    category: 'Mobile',
    icon: 'Smartphone',
    techTags: ['Java', 'Android', 'Kotlin', 'Firebase'],
    featured: true,
    order: 3,
  },
  {
    title: 'Digital Marketing',
    shortDescription: 'SEO, SMM, and online presence management for your brand.',
    description:
      'Grow your online presence with our comprehensive digital marketing services. We offer Search Engine Optimization (SEO), Social Media Marketing (SMM), Google Ads management, content marketing, and analytics reporting. We help businesses reach their target audience and convert visitors into customers.',
    category: 'Digital Marketing',
    icon: 'TrendingUp',
    techTags: ['SEO', 'SMM', 'Google Ads', 'Content Marketing', 'Analytics'],
    featured: false,
    order: 4,
  },
  {
    title: 'PHP Training',
    shortDescription: 'Comprehensive PHP training from basics to advanced concepts.',
    description:
      'Our PHP training program covers everything from core PHP fundamentals to advanced topics like OOP, MVC architecture, Laravel framework, and database integration. Students learn through hands-on projects and real-world assignments. Course includes MySQL, REST APIs, and deployment practices.',
    category: 'Training',
    icon: 'Code',
    techTags: ['PHP', 'MySQL', 'OOP', 'MVC', 'Laravel'],
    featured: false,
    order: 5,
  },
  {
    title: 'Java Training',
    shortDescription: 'Core Java and Advanced Java training with real projects.',
    description:
      'Master Java programming with our structured training program covering Core Java concepts, Advanced Java (JDBC, Servlets, JSP), Spring Framework, and Hibernate ORM. Our curriculum is designed for beginners to intermediate learners with industry-standard practices and placement support.',
    category: 'Training',
    icon: 'Coffee',
    techTags: ['Core Java', 'Advanced Java', 'Spring', 'Hibernate', 'JDBC'],
    featured: false,
    order: 6,
  },
  {
    title: 'Python Training',
    shortDescription: 'Python programming from fundamentals to data science basics.',
    description:
      'Learn Python programming with our comprehensive course covering core syntax, OOP principles, file handling, web scraping, Django framework, and an introduction to data science with NumPy and Pandas. Ideal for beginners looking to enter the tech industry or transition into Python development.',
    category: 'Training',
    icon: 'Terminal',
    techTags: ['Python', 'Django', 'NumPy', 'Pandas', 'OOP'],
    featured: false,
    order: 7,
  },
  {
    title: 'WordPress Development & Training',
    shortDescription: 'Build and manage WordPress websites with expert guidance.',
    description:
      'We offer both WordPress development services and training programs. Our training covers theme development, plugin creation, WooCommerce, page builders like Elementor, and SEO optimization. Perfect for aspiring web developers, freelancers, and entrepreneurs who want to manage their own sites.',
    category: 'Web Development',
    icon: 'Layout',
    techTags: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'CSS'],
    featured: false,
    order: 8,
  },
  {
    title: 'Oracle Database Training',
    shortDescription: 'Comprehensive Oracle Database administration and SQL training.',
    description:
      'Our Oracle Database training covers SQL fundamentals, PL/SQL programming, database design, normalization, stored procedures, triggers, and performance tuning. Ideal for students and professionals looking to build a career in database administration or backend development.',
    category: 'Training',
    icon: 'Database',
    techTags: ['Oracle', 'SQL', 'PL/SQL', 'Database Design', 'DBA'],
    featured: false,
    order: 9,
  },
  {
    title: 'IT Placement Support',
    shortDescription: '100% placement assistance for IT graduates and trainees.',
    description:
      'Our dedicated placement support program helps students and fresh graduates secure their first IT job. Services include resume building, mock interviews, aptitude training, communication skills workshops, and direct placement in partner companies. We have successfully placed 200+ students in top IT firms.',
    category: 'IT Services',
    icon: 'Briefcase',
    techTags: ['Resume Building', 'Mock Interviews', 'Soft Skills', 'Job Placement'],
    featured: true,
    order: 10,
  },
];

const blogPosts = [
  {
    title: 'Why PHP is Still Relevant in 2024',
    slug: 'why-php-is-still-relevant-in-2024',
    excerpt:
      'Despite newer technologies emerging every year, PHP continues to power over 77% of all websites. Discover why PHP remains a top choice for web development.',
    content: `PHP has been powering the web for nearly three decades, and in 2024, it remains one of the most widely used server-side languages. With the release of PHP 8.x, the language has seen significant performance improvements and modern features like named arguments, union types, fibers, and enums.

## PHP's Dominance in the CMS Space

WordPress alone powers over 43% of all websites on the internet, and it's built on PHP. Add Drupal, Joomla, Magento, and WooCommerce to the mix, and PHP's footprint becomes enormous. If you're working with CMS platforms, PHP is unavoidable.

## Modern PHP with Laravel

The Laravel framework has transformed PHP development. With its elegant syntax, built-in features for authentication, routing, queuing, and caching, Laravel makes PHP development a pleasure. The Artisan CLI, Eloquent ORM, and Blade templating engine have given PHP a modern edge.

## Performance Improvements

PHP 8.0 introduced the JIT (Just-In-Time) compiler, which significantly boosts performance for compute-intensive tasks. PHP 8.1 and 8.2 continued with enums, readonly properties, and fibers — making PHP competitive with modern languages.

## Job Market and Demand

PHP developers remain in high demand, especially for Laravel and WordPress projects. The cost-to-performance ratio makes PHP an attractive choice for startups and enterprises alike.

## Conclusion

PHP is far from dead. With modern frameworks, improved performance, and a massive ecosystem, PHP continues to be a valuable skill for any web developer in 2024.`,
    author: 'Rajesh Sharma',
    authorRole: 'Senior PHP Developer',
    category: 'Web Development',
    tags: ['PHP', 'Laravel', 'Web Development', 'Backend'],
    readTime: '6 min read',
    published: true,
    views: 245,
  },
  {
    title: 'Top 10 Tips for Getting Your First IT Job',
    slug: 'top-10-tips-for-getting-first-it-job',
    excerpt:
      'Breaking into the IT industry can be challenging. Here are 10 proven strategies to help fresh graduates land their first tech job.',
    content: `Landing your first IT job is one of the most exciting milestones in a tech career. Whether you're a fresh graduate or a career switcher, these 10 tips will help you stand out from the competition.

## 1. Build a Strong Portfolio

Nothing speaks louder than working code. Create 3–5 projects that demonstrate your skills. Host them on GitHub and deploy them publicly. Recruiters want to see what you can build, not just what you claim to know.

## 2. Master the Fundamentals

Strong fundamentals in data structures, algorithms, and system design are essential. Practice on platforms like LeetCode, HackerRank, or CodeChef regularly.

## 3. Get Certified

Certifications from AWS, Google, Microsoft, or Oracle can differentiate your resume. Even free certifications from platforms like Coursera or Udemy add credibility.

## 4. Network Actively

Join LinkedIn, attend tech meetups, and connect with professionals in your desired field. Many jobs are filled through referrals — your network is your net worth.

## 5. Tailor Your Resume

Don't send generic resumes. Customize your resume for each job application, using keywords from the job description. Keep it to 1 page for freshers.

## 6. Practice Mock Interviews

Technical interviews can be nerve-wracking. Practice with peers, mentors, or platforms like Pramp or InterviewBit. Confidence comes from repetition.

## 7. Learn Version Control

Git is a must-have skill. Learn branching, merging, pull requests, and GitHub workflows. This is non-negotiable for any development role.

## 8. Contribute to Open Source

Contributing to open source projects shows initiative and collaboration skills. Even small contributions — fixing bugs, improving documentation — count.

## 9. Apply Broadly

Don't limit yourself to dream companies initially. Apply to startups, mid-size companies, and service firms. Getting experience is the priority.

## 10. Stay Consistent

The job search can take 2–6 months. Stay consistent, keep learning, and don't get discouraged by rejections. Every rejection brings you closer to the right offer.`,
    author: 'Priya Gupta',
    authorRole: 'Career Counselor',
    category: 'Career Tips',
    tags: ['Job Search', 'Career', 'IT Jobs', 'Fresher Tips'],
    readTime: '8 min read',
    published: true,
    views: 412,
  },
  {
    title: 'WordPress vs Laravel: Which to Choose?',
    slug: 'wordpress-vs-laravel-which-to-choose',
    excerpt:
      'Two of the most popular PHP-based platforms — when should you choose WordPress and when should you go with Laravel? A comprehensive comparison.',
    content: `Choosing between WordPress and Laravel for your next project depends heavily on your requirements. Both are PHP-based, but they serve very different purposes.

## WordPress: The CMS Powerhouse

WordPress is a Content Management System (CMS) designed for non-technical users. It excels at:

- **Blogging and Content Sites**: Built-in posts, pages, categories, tags
- **E-commerce**: WooCommerce plugin for full-featured online stores
- **Quick Deployment**: Themes and plugins let you launch in days
- **No-Code Friendly**: Drag-and-drop builders like Elementor

### When to Choose WordPress:
- You need a content-heavy website
- Your client wants to manage content without technical knowledge
- Budget is limited and you need fast delivery
- You're building a portfolio, blog, or business brochure site

## Laravel: The Developer's Framework

Laravel is a PHP framework for building custom web applications. It excels at:

- **Custom Business Logic**: Build exactly what you need
- **APIs**: RESTful API development with robust features
- **Scalability**: Designed to handle large, complex applications
- **Security**: Built-in CSRF protection, encryption, and more

### When to Choose Laravel:
- You're building a custom SaaS application
- Complex business rules and workflows are required
- You need a robust API backend
- Performance and scalability are priorities

## Performance Comparison

Laravel generally outperforms WordPress for custom applications. WordPress carries overhead from its plugin architecture. However, with proper caching (WP Super Cache, Redis), WordPress performs well for content sites.

## Development Time

WordPress wins on development speed for standard websites. Laravel wins for custom applications where WordPress would require heavy customization.

## Conclusion

Use WordPress for content-driven websites and use Laravel for custom web applications. The best tool depends on your project requirements, not personal preference.`,
    author: 'Amit Pandey',
    authorRole: 'Full Stack Developer',
    category: 'Web Development',
    tags: ['WordPress', 'Laravel', 'PHP', 'CMS', 'Framework'],
    readTime: '7 min read',
    published: true,
    views: 389,
  },
  {
    title: 'Digital Marketing Strategies for Small Businesses',
    slug: 'digital-marketing-strategies-for-small-businesses',
    excerpt:
      'Discover effective and budget-friendly digital marketing strategies that small businesses can implement to grow their online presence.',
    content: `In today's digital age, having an online presence is not optional for small businesses — it's essential. The good news is that effective digital marketing doesn't require a massive budget.

## 1. Google My Business (Free)

Claim and optimize your Google My Business listing. This ensures your business appears in local searches and Google Maps. Add photos, business hours, and encourage reviews.

## 2. Social Media Marketing

Focus on 2–3 platforms where your audience is most active:
- **Facebook**: Great for local businesses and community building
- **Instagram**: Visual brands, restaurants, fashion
- **LinkedIn**: B2B services and professional networking

Post consistently — 4–5 times per week is ideal for small businesses.

## 3. Content Marketing

Create a blog on your website. Publish helpful, keyword-rich articles that answer questions your customers are asking. This drives organic traffic over time and establishes authority.

## 4. Email Marketing

Build an email list from day one. Use tools like Mailchimp (free up to 500 contacts) to send newsletters, promotions, and updates. Email marketing has the highest ROI of any digital channel.

## 5. Local SEO

Optimize your website for local search:
- Use location-based keywords (e.g., "IT training in Gwalior")
- Get listed in local directories
- Build local backlinks from community websites

## 6. Google Ads (Paid)

Start with a small budget (₹500–1000/day). Use Google Search Ads to target specific keywords your customers search for. Track conversions and optimize over time.

## 7. Video Marketing

Short-form video content on YouTube Shorts, Instagram Reels, and Facebook Reels drives massive engagement at minimal cost. Showcase your products, services, and team.

## Conclusion

Start with free strategies (Google My Business, social media, content) before investing in paid advertising. Consistency is key — small businesses that show up regularly online build trust and win customers.`,
    author: 'Sneha Verma',
    authorRole: 'Digital Marketing Specialist',
    category: 'Digital Marketing',
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Small Business', 'Google Ads'],
    readTime: '9 min read',
    published: true,
    views: 567,
  },
  {
    title: 'Getting Started with Android Development in 2024',
    slug: 'getting-started-with-android-development-2024',
    excerpt:
      'A complete guide for beginners to start their Android development journey in 2024, covering languages, tools, and first steps.',
    content: `Android is the world's most popular mobile operating system, powering over 3 billion devices. Learning Android development in 2024 opens doors to exciting career opportunities.

## Choose Your Language: Kotlin vs Java

**Kotlin** is the officially recommended language for Android development. It's modern, concise, and interoperable with Java. Google has prioritized Kotlin since 2019.

**Java** remains relevant — especially in legacy codebases. Learning Java first gives you a solid foundation, and transitioning to Kotlin becomes easier.

**Recommendation for 2024**: Start with Kotlin. It's the future of Android.

## Set Up Android Studio

1. Download Android Studio from developer.android.com
2. Install the Android SDK
3. Create a virtual device (AVD) for testing
4. Write your first "Hello World" app

## Learn the Core Concepts

### Activities and Fragments
Activities represent full screens. Fragments are reusable UI components. Understanding the Activity Lifecycle is crucial.

### XML Layouts vs Jetpack Compose
Traditional Android uses XML for UI design. **Jetpack Compose** (introduced in 2021) is the modern declarative UI framework. For 2024, learn Compose — it's the future.

### RecyclerView
For displaying lists of data efficiently, RecyclerView with Adapter pattern is essential.

### Intents and Navigation
Intents are used to navigate between activities and share data. The Navigation Component simplifies complex navigation.

## Firebase Integration

Firebase provides:
- Authentication (Google, Email/Password)
- Realtime Database / Firestore
- Cloud Storage
- Push Notifications (FCM)

Most Android apps use Firebase for backend services.

## Resources for Learning

- **Android Developers**: developer.android.com (official docs)
- **Udemy**: "The Complete Android Developer" courses
- **YouTube**: Philipp Lackner, Coding with Mitch
- **GitHub**: Study open-source Android projects

## Build Your First App

Don't just follow tutorials — build something you personally want to use. Ideas:
- To-do list app
- Weather app using OpenWeatherMap API
- Expense tracker
- Notes app

## Conclusion

Android development in 2024 is exciting with Kotlin, Jetpack Compose, and a rich ecosystem. Start with the basics, build projects, and grow consistently.`,
    author: 'Vikram Singh',
    authorRole: 'Android Developer',
    category: 'Mobile',
    tags: ['Android', 'Kotlin', 'Java', 'Mobile Development', 'Jetpack Compose'],
    readTime: '10 min read',
    published: true,
    views: 298,
  },
  {
    title: 'Full Stack Development: The Complete Roadmap',
    slug: 'full-stack-development-complete-roadmap',
    excerpt:
      'A comprehensive roadmap for becoming a full-stack developer in 2024, covering frontend, backend, databases, DevOps, and beyond.',
    content: `Full stack development is one of the most in-demand skill sets in the tech industry. A full stack developer can work on both the client-side (frontend) and server-side (backend) of web applications.

## Phase 1: Frontend Fundamentals (2–3 months)

### HTML & CSS
- Semantic HTML5
- CSS3: Flexbox, Grid, Animations
- Responsive Design (Mobile-first)
- CSS Preprocessors (SASS/SCSS)

### JavaScript
- ES6+ features (arrow functions, destructuring, promises, async/await)
- DOM manipulation
- Fetch API / AJAX
- Event handling

### React (Recommended Framework)
- Components, Props, State
- Hooks (useState, useEffect, useContext, useRef)
- React Router for navigation
- State management (Context API or Redux)

## Phase 2: Backend Development (2–3 months)

### Node.js & Express
- RESTful API design
- Middleware and routing
- Authentication (JWT, sessions)
- File uploads, email sending

### Databases
- **SQL**: MySQL or PostgreSQL — joins, indexes, transactions
- **NoSQL**: MongoDB — documents, aggregations, Mongoose ODM

### Authentication & Security
- JWT tokens
- Password hashing (bcrypt)
- Input validation and sanitization
- CORS, Helmet, Rate limiting

## Phase 3: Developer Tools (Ongoing)

- **Git & GitHub**: Version control, branching, pull requests
- **npm/yarn**: Package management
- **Postman**: API testing
- **VS Code**: Extensions and shortcuts
- **Docker**: Containerization basics

## Phase 4: Deployment & DevOps (1–2 months)

- **Cloud**: AWS, Google Cloud, or Azure basics
- **Hosting**: Vercel/Netlify (frontend), Railway/Render (backend)
- **CI/CD**: GitHub Actions basics
- **Nginx**: Reverse proxy setup

## Phase 5: Advanced Topics

- WebSockets (real-time communication)
- GraphQL
- Microservices architecture
- Performance optimization
- Testing (Jest, Cypress)

## The Full Stack Tech Stack for 2024

**MERN Stack** (Most popular):
- MongoDB + Express + React + Node.js

**LAMP Stack** (Classic):
- Linux + Apache + MySQL + PHP

## Building Your Portfolio

Build these 5 projects to showcase full stack skills:
1. Todo App (CRUD operations)
2. E-commerce store (with payment integration)
3. Blog platform (with CMS)
4. Chat application (WebSockets)
5. Dashboard application (data visualization)

## Conclusion

Becoming a full stack developer takes 6–12 months of consistent learning and building. Focus on fundamentals, build real projects, and keep up with the evolving ecosystem.`,
    author: 'Arjun Kumar',
    authorRole: 'Full Stack Developer',
    category: 'Web Development',
    tags: ['Full Stack', 'MERN', 'React', 'Node.js', 'Career Roadmap'],
    readTime: '12 min read',
    published: true,
    views: 734,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany({});
    await BlogPost.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Seed services
    await Service.insertMany(services);
    console.log(`✅ Seeded ${services.length} services`);

    // Seed blog posts
    await BlogPost.insertMany(blogPosts);
    console.log(`✅ Seeded ${blogPosts.length} blog posts`);

    console.log('🎉 Database seeding completed!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
}

seedDatabase();
