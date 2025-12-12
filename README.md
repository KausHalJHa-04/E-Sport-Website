<h1 align="center">🏀 E-SPORT E-Commerce Website</h1>

<p align="center">
A powerful and fully responsive <b>Sports E-Commerce Platform</b> built using the <b>MERN stack (MongoDB, Express.js, React.js, Node.js)</b>.  
This platform allows users to explore and purchase sports products while providing administrators complete control over product and user management.
</p>

<hr>

<h2>🚀 Tech Stack</h2>

<h3>🎨 Frontend</h3>
<ul>
  <li>⚛️ <b>React.js</b> – Component-based UI framework</li>
  <li>💨 <b>Tailwind CSS</b> – Modern utility-first styling</li>
  <li>🧠 <b>Redux Toolkit</b> – Global state management</li>
  <li>⚡ <b>Vite</b> – Lightning-fast development environment</li>
</ul>

<h3>⚙️ Backend</h3>
<ul>
  <li>🟩 <b>Node.js</b> – JavaScript runtime environment</li>
  <li>🚏 <b>Express.js</b> – Backend framework for API development</li>
  <li>🍃 <b>MongoDB</b> – NoSQL database for scalable storage</li>
  <li>📦 <b>Mongoose</b> – ODM for MongoDB</li>
  <li>🔐 <b>JWT</b> – Secure authentication & authorization</li>
  <li>🍪 <b>Cookie Parser</b> – Handle user cookies safely</li>
  <li>🔑 <b>Bcrypt.js</b> – Encrypt and hash passwords</li>
  <li>⚙️ <b>Dotenv</b> – Environment variable management</li>
</ul>

<hr>

<h2>📘 Project Overview</h2>
<p>
This e-commerce project is designed for sports and fitness products.  
Users can register, log in, browse items, add them to their cart or wishlist, and securely proceed through the checkout flow.  
Admins can manage products, categories, and view user activity.
</p>

<hr>

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
<hr> <h2>✨ Features</h2> <h3>🧑‍💼 User Features</h3> <ul> <li>👤 User registration and login using <b>JWT</b></li> <li>🔐 Secure password encryption with <b>Bcrypt</b></li> <li>🏷️ Browse sports products by category</li> <li>📄 Product detail page with dynamic rendering</li> <li>🛒 Add to cart and wishlist</li> <li>💳 Manage cart items and checkout summary</li> </ul> <h3>👨‍💻 Admin Features</h3> <ul> <li>🔑 Admin authentication and dashboard</li> <li>🧾 Manage (Create, Update, Delete) products</li> <li>👥 View registered users and statistics</li> </ul> <h3>🔒 Security</h3> <ul> <li>🔐 Passwords hashed using <b>Bcrypt</b></li> <li>🛡️ Authentication with <b>JWT</b></li> <li>🍪 Secure cookie handling via <b>Cookie-Parser</b></li> <li>⚙️ Sensitive data protected using <b>Dotenv</b></li> </ul> <hr> <h2>🧠 Redux Store Structure</h2> <ul> <li>🧍 <b>userSlice.js</b> → Handles authentication and profile</li> <li>🛒 <b>cartSlice.js</b> → Manages cart actions</li> <li>🏷️ <b>productSlice.js</b> → Manages product data and filtering</li> <li>💖 <b>wishlistSlice.js</b> → Handles wishlist management</li> </ul> <hr> <h2>🧩 API Endpoints Overview</h2> <table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr><td><b>POST</b></td><td><code>/api/auth/signup</code></td><td>Register new user</td></tr> <tr><td><b>POST</b></td><td><code>/api/auth/login</code></td><td>Login existing user</td></tr> <tr><td><b>GET</b></td><td><code>/api/products</code></td><td>Get all products</td></tr> <tr><td><b>GET</b></td><td><code>/api/products/:id</code></td><td>Get a specific product</td></tr> <tr><td><b>POST</b></td><td><code>/api/products</code></td><td>Add new product (Admin)</td></tr> <tr><td><b>PUT</b></td><td><code>/api/products/:id</code></td><td>Update product (Admin)</td></tr> <tr><td><b>DELETE</b></td><td><code>/api/products/:id</code></td><td>Delete product (Admin)</td></tr> <tr><td><b>GET</b></td><td><code>/api/user/:id</code></td><td>Fetch user profile</td></tr> </tbody> </table> <hr> <h2>⚙️ Installation and Setup</h2> <h3>1️⃣ Clone the Repository</h3> <pre><code>git clone https://github.com/KausHalJHa-04/e-sport-website.git cd e-sport-website </code></pre> <h3>2️⃣ Install Dependencies</h3>

<b>Frontend:</b>

<pre><code>cd frontend npm install </code></pre>

<b>Backend:</b>

<pre><code>cd backend npm install </code></pre> <h3>3️⃣ Configure Environment Variables</h3> <p>Create a <b>.env</b> file inside <b>backend</b>:</p> <pre><code>PORT=5000 MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_secret_key </code></pre> <h3>4️⃣ Run the Application</h3>

<b>Start Backend:</b>

<pre><code>cd backend npm run dev </code></pre>

<b>Start Frontend:</b>

<pre><code>cd frontend npm run dev </code></pre> <p>Then open:</p> <ul> <li>👉 <b>Frontend:</b> http://localhost:5173</li> <li>👉 <b>Backend API:</b> http://localhost:5000</li> </ul> <hr> <h2>📦 System Architecture</h2> <pre><code>[ React.js + Redux ] ---> [ Express.js + Node.js API ] ---> [ MongoDB Database ] | | | Client UI Business Logic Data Storage </code></pre> <hr> <h2>🚀 Future Enhancements</h2> <ul> <li>🛍️ Online payment integration (Stripe / Razorpay)</li> <li>📦 Order tracking system</li> <li>💬 Live chat support</li> <li>🌐 Multi-language support</li> <li>📱 Mobile app integration (React Native)</li> </ul> <hr> <h2>🧰 Tools Used</h2> <ul> <li>💻 <b>VS Code</b> – Development environment</li> <li>📬 <b>Postman</b> – API testing</li> <li>☁️ <b>MongoDB Atlas</b> – Cloud database</li> <li>🧾 <b>Git & GitHub</b> – Version control</li> </ul> <hr> <h2>🤝 Contributing</h2> <p>Pull requests are welcome! For major improvements, please open an issue first to discuss.</p> <hr> <h2>🧾 License</h2> <p>This project is open-source and available under the <a href="LICENSE" target="_blank">MIT License</a>. </p> <hr> <h2 align="center">💬 Author</h2> <p align="center"> <b>Kaushal Jha</b><br> 📧 <a href="mailto:jhakaushal361@gmail.com">jhakaushal361@gmail.com</a><br> 🌐 <a href="https://personal-portfolio-gilt-beta-41.vercel.app/" target="_blank">Portfolio</a> • 💼 <a href="https://www.linkedin.com/in/kaushal-jha-6073042aa/" target="_blank">LinkedIn</a> • 🐙 <a href="https://github.com/KausHalJHa-04" target="_blank">GitHub</a> </p>
