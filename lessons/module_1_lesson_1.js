const lessonContent = {
  title: "JavaScript intro",
  content: `
      <div style="margin: 16px 0;">
      <video controls style="width: 100%; border-radius: 12px;">
        <source src="https://stream.mux.com/rR8P8mSaKDzz02TsftugTUdI00cQPJX00oy.m3u8" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <h4>1) First JavaScript code</h4>
    <pre class="text-sm font-mono bg-base-200 p-4 rounded-md overflow-x-auto"><code class="language-js">console.log("Hello, JavaScript!");</code></pre>

    <h4>2) Multiple outputs</h4>
    <pre class="text-sm font-mono bg-base-200 p-4 rounded-md overflow-x-auto"><code class="language-js">console.log("Welcome to JavaScript Mastery");
console.log("This is your first lesson");</code></pre>

    <h4>3) JavaScript executes line by line</h4>
    <pre class="text-sm font-mono bg-base-200 p-4 rounded-md overflow-x-auto"><code class="language-js">console.log("Step 1");
console.log("Step 2");
console.log("Step 3");</code></pre>

    <!-- Key insights (highlighted, bulleted) -->
    <div class="bg-accent/10 border-l-4 border-accent p-4 rounded-md mt-6">
      <h3 class="text-lg font-semibold text-accent mb-2">Key insights</h3>
      <ul class="list-disc pl-6 space-y-2 text-base-content/90">
        <li>JavaScript is a programming language used to build interactive applications and dynamic websites.</li>
        <li>It runs not only in browsers, but also on servers (Node.js), mobile apps, and desktop software.</li>
        <li>In this module, you’ll learn the fundamentals: how JavaScript handles data, calculations, and decision-making.</li>
        <li>Programming starts with simple steps — writing code, running it, and understanding how it executes line by line.</li>
      </ul>
    </div>
  `,
};

export default lessonContent;
