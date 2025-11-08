<h1 align="center">🏀 E-SPORT E-Commerce Website</h1>

<p align="center">
A powerful and fully responsive <b>Sports E-Commerce Platform</b> built using the <b>MERN stack (MongoDB, Express.js, React.js, Node.js)</b>.<br>
This platform allows users to explore and purchase sports products while providing administrators complete control over product and user management.
</p>

---

<h2>🚀 Tech Stack</h2>

<h3>🎨 Frontend</h3>

- ⚛️ <b>React.js</b> – Component-based UI framework  
- 💨 <b>Tailwind CSS</b> – Modern utility-first styling  
- 🧠 <b>Redux Toolkit</b> – Global state management  
- ⚡ <b>Vite</b> – High-performance build tool  

<h3>⚙️ Backend</h3>

- 🟩 <b>Node.js</b> – JavaScript runtime for the server  
- 🚏 <b>Express.js</b> – Backend framework for APIs and routing  
- 🍃 <b>MongoDB</b> – NoSQL database for storing products, users, and orders  
- 🧩 <b>Mongoose</b> – For defining and managing schemas  
- 🔐 <b>JWT (JSON Web Token)</b> – Secure user authentication  
- 🍪 <b>Cookie Parser</b> – Handle browser cookies securely  
- 🔑 <b>Bcrypt.js</b> – Hash and secure user passwords  
- ⚙️ <b>Dotenv</b> – Manage environment variables  

---

<h2>📘 Project Overview</h2>

<p>
This project is a full-stack e-commerce application focused on sports and fitness products.  
Users can register, log in, browse items, add them to their cart or wishlist, and securely place orders.  
The admin has access to add, update, or delete products, view users, and manage the platform.
</p>

---

<h2>📁 Folder Structure</h2>

<h3>🖥️ Frontend (<code>/frontend/src</code>)</h3>

```plaintext
src/
 ├── components/
 │    ├── Navbar.jsx / Navbar.css
 │    └── ProtectedRoute.jsx
 │
 ├── pages/
 │    ├── admin/
 │    ├── auth/
 │    │    ├── LoginPage.jsx
 │    │    ├── SignupPage.jsx
 │    │    └── AdminSignup.jsx
 │    ├── CartPage.jsx
 │    ├── Categories.jsx
 │    ├── ProductDetailPage.jsx
 │    ├── Home.jsx
 │    ├── WishlistPage.jsx
 │    ├── ContactPage.jsx
 │    └── SalesPage.jsx
 │
 ├── redux/
 ├── services/
 ├── App.jsx / App.css
 ├── main.jsx
 └── index.css
```
<h3>⚙️ Backend (<code>/backend</code>)</h3>

```
backend/
 ├── controller/
 │    ├── auth.controller.js
 │    ├── product.controller.js
 │    └── user.controller.js
 │
 ├── model/
 │    ├── category.model.js
 │    ├── product.model.js
 │    └── user.schema.js
 │
 ├── routes/
 │    ├── auth.route.js
 │    ├── product.route.js
 │    └── user.route.js
 │
 ├── middleware/
 │    └── middleware.js
 │
 ├── helper/
 ├── db.js
 ├── index.js
 ├── .env
 └── package.json

```
<h2 align="center">✨ Features</h2>

<h3>🧑‍💼 User Features</h3>
<ul>
  <li>👤 User registration and login using <b>JWT</b></li>
  <li>🔐 Secure password encryption with <b>Bcrypt</b></li>
  <li>🏷️ Browse sports products by category</li>
  <li>📄 Product detail page with dynamic rendering</li>
  <li>🛒 Add to cart and wishlist functionality</li>
  <li>💳 Manage cart items and view checkout summary</li>
</ul>
<br>

<h3>👨‍💻 Admin Features</h3>
<ul>
  <li>🔑 Admin authentication and protected dashboard</li>
  <li>🧾 Manage (Create, Update, Delete) products</li>
  <li>👥 View registered users and product list</li>
</ul>
<br>

<h3>🔒 Security Features</h3>
<ul>
  <li>🧩 Passwords hashed securely using <b>Bcrypt</b></li>
  <li>🛡️ Token-based authentication with <b>JWT</b></li>
  <li>🍪 Cookies handled securely using <b>Cookie-Parser</b></li>
  <li>⚙️ Environment variables managed via <b>Dotenv</b></li>
</ul>
<h2>🧠 Redux Store Structure</h2>

<p>
The application uses <b>Redux Toolkit</b> for state management, allowing efficient and predictable handling of UI and data flow across components.
</p>

<ul>
  <li>🧍 <b>userSlice.js</b> → Handles user authentication, login state, and profile data</li>
  <li>🛒 <b>cartSlice.js</b> → Manages shopping cart items, quantities, and total price</li>
  <li>🏷️ <b>productSlice.js</b> → Fetches and manages product data, categories, and filters</li>
  <li>💖 <b>wishlistSlice.js</b> → Handles wishlist operations like add/remove items</li>
</ul>
<h2>⚙️ Installation and Setup</h2>

<h3>1️⃣ Clone the Repository</h3>
<pre><code>git clone https://github.com/KausHalJHa-04/e-sport-website.git
cd e-sport-website
</code></pre>

<h3>2️⃣ Install Dependencies</h3>

<b>Frontend:</b>
<pre><code>cd frontend
npm install
</code></pre>

<b>Backend:</b>
<pre><code>cd backend
npm install
</code></pre>

<h3>3️⃣ Configure Environment Variables</h3>
<p>Create a <b>.env</b> file inside <b>backend</b> folder and add the following:</p>

<pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
</code></pre>

<h3>4️⃣ Run the Application</h3>

<b>Start Backend:</b>
<pre><code>cd backend
npm run dev
</code></pre>

<b>Start Frontend:</b>
<pre><code>cd frontend
npm run dev
</code></pre>

<p>Then open:</p>
<ul>
  <li>👉 <b>Frontend:</b> <a href="http://localhost:5173" target="_blank">http://localhost:5173</a></li>
  <li>👉 <b>Backend API:</b> <a href="http://localhost:5000" target="_blank">http://localhost:5000</a></li>
</ul>

<hr>

<h2>📦 System Architecture</h2>

<pre><code>[ React.js + Redux ]  --->  [ Express.js + Node.js API ]  --->  [ MongoDB Database ]
         |                               |                             |
     Client UI                    Business Logic                   Data Storage
</code></pre>

<hr>

<h2>🚀 Future Enhancements</h2>
<ul>
  <li>🛍️ Online payment integration (Stripe / Razorpay)</li>
  <li>📦 Order tracking system</li>
  <li>💬 Live chat support</li>
  <li>🌐 Multi-language support</li>
  <li>📱 Mobile app integration (React Native)</li>
</ul>

<hr>

<h2>🧰 Tools Used</h2>
<ul>
  <li>💻 <b>VS Code</b> – IDE for development</li>
  <li>📬 <b>Postman</b> – API testing</li>
  <li>☁️ <b>MongoDB Atlas</b> – Cloud database</li>
  <li>🧾 <b>Git & GitHub</b> – Version control</li>
</ul>

<hr>

<h2>🤝 Contributing</h2>
<p>Pull requests are welcome! For significant changes, please open an issue first to discuss improvements.</p>

<hr>

<h2>🧾 License</h2>
<p>This project is open-source and licensed under the 
<a href="LICENSE" target="_blank">MIT License</a>.
</p>

<hr>

<h2 align="center">💬 Author</h2>
<p align="center">
  <b>Kaushal Jha</b><br>
  📧 <a href="mailto:jhakaushal361@gmail.com">jhakaushal361@gmail.com</a><br>
  🌐 <a href="https://personal-portfolio-gilt-beta-41.vercel.app/" target="_blank">Portfolio</a> • 
  💼 <a href="https://www.linkedin.com/in/kaushal-jha-6073042aa/" target="_blank">LinkedIn</a> • 
  🐙 <a href="https://github.com/KausHalJHa-04" target="_blank">GitHub</a>
</p>
