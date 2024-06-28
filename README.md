<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdullah Syed's Portfolio</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f0f0f0;
            color: #101357; /* Mountain Shadow Blue */
        }

        header {
            background-color: #101357; /* Mountain Shadow Blue */
            color: white;
            padding: 10px 0;
        }

        nav ul {
            list-style: none;
            padding: 0;
            text-align: center;
        }

        nav ul li {
            display: inline;
            margin: 0 15px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        footer {
            background-color: #101357; /* Mountain Shadow Blue */
            color: white;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }

        main {
            padding: 20px;
        }

        .introduction, .biography, .projects, .contact {
            margin-bottom: 50px;
            background-color: #ffffff; /* White background for sections */
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .introduction h1, .biography h1, .projects h1, .contact h1 {
            color: #fea49f; /* Old Makeup Pink */
        }

        .introduction p, .biography p, .projects p, .contact p {
            color: #101357; /* Mountain Shadow Blue */
        }

        .introduction img, .project img {
            max-width: 65%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .projects .project {
            border: 2px solid #00a0a0; /* Bluebell Light Blue */
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 10px;
            background-color: #e8f5f5; /* Light Blue background for projects */
        }

        .projects .project h2 {
            color: #fbaf08; /* Goldenrod Yellow */
        }

        .projects .project img {
            width: 20%; /* Adjust this value as needed */
            height: auto; /* Maintains aspect ratio */
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .contact form {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }

        .contact form label {
            color: #101357; /* Mountain Shadow Blue */
            font-weight: bold;
        }

        .contact form input, .contact form textarea {
            padding: 10px;
            border: 1px solid #00a0a0; /* Bluebell Light Blue */
            border-radius: 5px;
        }

        .contact form button {
            padding: 10px;
            background-color: #fbaf08; /* Goldenrod Yellow */
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }

        .contact .social-media {
            list-style: none;
            padding: 0;
            text-align: center;
        }

        .contact .social-media li {
            display: inline;
            margin: 0 10px;
        }

        .contact .social-media img {
            width: 47px;
            height: 47px;
        }
    </style>
</head>

<body>
    <header>
        <nav>
            <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About Me</a></li>
                <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                <li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Home Section -->
        <section id="home" class="introduction">
            <h1>Welcome to My Portfolio</h1>
            <p>Welcome, my name is Abdullah Syed, born in Pakistan, and currently an undergraduate student at York University.</p>
            <img src="IMG_5592.JPG" alt="Profile Picture" class="img-fluid rounded-circle">
        </section>

        <!-- About Me Section -->
        <section id="about" class="biography">
            <h1>About Me</h1>
            <p>Propelled by a lifelong fascination for computers and technology alongside an extensive degree in Information Technology. Highly skilled at resolving complex technical issues in a timely manner. I am energetic with outstanding customer service experience, and interpersonal, analytical, and critical thinking skills.</p>
            <h2>Skills & Interests</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Basketball</li>
                <li>Fishing</li>
                <li>Reading</li>
                <li>...</li>
            </ul>
            <h2>Resume</h2>
            <iframe src="Abdullah Syed 1 CV.pdf" width="100%" height="600px"></iframe>
            <a href="Abdullah Syed 1 CV.pdf" download class="btn btn-primary">Download Resume</a>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects">
            <h1>My Projects</h1>
            <div class="project">
                <img src="img01.jpg" alt="AI Healthcare Chat Bot" class="img-fluid">
                <h2>AI Healthcare Chat Bot</h2>
                <p>This project involves the creation of an intelligent chat bot designed to provide healthcare advice and information. It uses natural language processing and machine learning to understand user queries and offer relevant responses.</p>
                <a href="https://github.com/abs22002/ai-healthcare-chatbot" class="btn btn-primary">GitHub Repo</a>
            </div>
            <div class="project">
                <img src="deteccion-senales-1200x600-1.webp" alt="Road Detection System" class="img-fluid">
                <h2>Road Detection System</h2>
                <p>This project focuses on developing a system to detect road conditions using computer vision and deep learning techniques. It aims to improve autonomous vehicle navigation by identifying and classifying different road types and obstacles.</p>
                <a href="https://github.com/abs22002/road-detection-system" class="btn btn-primary">GitHub Repo</a>
            </div>
            <!-- Add more projects as needed -->
        </section>

        <!-- Blog Section -->
        <section id="blog" class="blog">
            <h1>Blog</h1>
            <p>Content will be added in Assignment 2.</p>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact">
            <h1>Contact Me</h1>
            <form action="mailto:your.email@example.com" method="post" enctype="text/plain">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" class="form-control" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
            <h2>Follow Me</h2>
            <ul class="social-media">
                <li><a href="https://twitter.com/abdullahsyed"><img src="x-logo-twitter-elon-musk_dezeen_2364_col_0.webp" alt="Twitter"></a></li>
                <li><a href="https://www.linkedin.com/in/abdullah-syed-b62151316/"><img src="LinkedIn_logo_initials.png" alt="LinkedIn"></a></li>
                <li><a href="https://github.com/abs22002"><img src="github-6980894_1280.webp" alt="GitHub"></a></li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Abdullah Syed. All rights reserved.</p>
    </footer>

    <!-- Bootstrap JS, optionally -->
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> -->
</body>
</html>
