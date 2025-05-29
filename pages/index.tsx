<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SmartMatePro</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Inter', sans-serif;
      color: #111;
      line-height: 1.6;
      background-color: #fff;
    }
    section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3rem 2rem;
      text-align: center;
    }
    h1, h2, h3 {
      margin-bottom: 1rem;
      font-weight: 700;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    p {
      max-width: 600px;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    ul li::before {
      content: "\2713";
      color: #007aff;
      margin-right: 0.5rem;
    }
    ul li {
      font-size: 1.1rem;
      margin: 0.5rem 0;
    }
    .logo {
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(to right, #007aff, #00c6ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
    .button {
      padding: 1rem 2rem;
      background-color: #111827;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      margin-top: 2rem;
      transition: background 0.3s ease;
    }
    .button:hover {
      background-color: #374151;
    }
    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .service-tag {
      background-color: #f1f3f5;
      padding: 0.5rem 1rem;
      border-radius: 999px;
      font-weight: 500;
      font-size: 0.95rem;
    }
    .hero {
      background: linear-gradient(145deg, #f0f4ff, #e6f0ff);
      color: #111827;
    }
    .cta {
      background: linear-gradient(135deg, #f4f7fc, #e8f0fe);
      color: #111827;
    }
  </style>
</head>
<body>
  <!-- Hero section -->
  <section class="hero">
    <div class="logo">SmartMatePro</div>
    <h2>Smarter communication starts here</h2>
    <p>AI-powered assistant that talks and texts like your best team member.</p>
  </section>

  <!-- Demo Chat Section -->
  <section style="background: linear-gradient(180deg, #f9fafc, #ffffff);">
    <h2>How SmartMatePro Works</h2>
    <p>See SmartMatePro respond in real time — just like a human assistant.</p>
    <img src="your-example-chat-image.png" alt="Chat Demo" style="max-width: 90%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); margin-top: 2rem;">
  </section>

  <!-- Why SmartMatePro Section -->
  <section style="background: linear-gradient(180deg, #ffffff, #f6f9fd);">
    <h2>Why SmartMatePro?</h2>
    <ul>
      <li>24/7 AI-powered communication</li>
      <li>Voice and text assistant in one platform</li>
      <li>Integrated calendar booking</li>
      <li>Customizable tone and responses</li>
      <li>Fast, no-code setup</li>
    </ul>
    <div class="services">
      <h3 style="width: 100%; margin-top: 2rem;">Works with:</h3>
      <div class="service-tag">WhatsApp</div>
      <div class="service-tag">Instagram</div>
      <div class="service-tag">Telegram</div>
      <div class="service-tag">Messenger</div>
      <div class="service-tag">Gmail</div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="cta">
    <h2>Try SmartMatePro</h2>
    <h3>Let your business speak smarter</h3>
    <button class="button">Get Started</button>
  </section>
</body>
</html>
