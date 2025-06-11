import React from "react";

const ProfilePage = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 pt-24 text-foreground">
      <div className="flex items-center space-x-6 mb-6">
        <img
          src="/my-photo.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-muted-foreground">Full-stack Web Developer</p>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Contact</h2>
        <ul className="text-sm space-y-1">
          <li>
            📧{" "}
            <a href="mailto:you@email.com" className="hover:underline">
              you@email.com
            </a>
          </li>
          <li>📞 +123 456 789</li>
          <li>
            💼{" "}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            📄{" "}
            <a
              href="/cv.pdf"
              download
              className="text-green-500 hover:underline"
            >
              Download CV
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">About Me</h2>
        <p className="text-sm text-muted-foreground">
          I'm a passionate web developer specializing in building fast,
          accessible, and user-friendly applications. I love combining creative
          design with clean code, and I’m always looking for opportunities to
          build meaningful digital experiences.
        </p>
      </section>
    </main>
  );
};

export default ProfilePage;
