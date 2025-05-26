import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <div className="text-4xl font-bold mb-4">SmartMatePro</div>
        <div className="text-xl mb-6">Let your business speak smarter</div>
        <button className="bg-black text-white text-lg px-6 py-3 rounded-xl hover:bg-gray-800">
          Join Early Access
        </button>
      </section>

      {/* Chat Example Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
          <p className="mb-2 text-sm text-gray-500">Customer</p>
          <div className="bg-gray-100 p-4 rounded-xl mb-4">
            Hi, I need to reschedule my appointment.
          </div>
          <p className="mb-2 text-sm text-gray-500">Your Business Name</p>
          <div className="bg-green-100 p-4 rounded-xl">
            No problem! Please let us know what date and time works best for you.
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why SmartMatePro?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">24/7 Response</h3>
            <p>Instantly answers customers any time of day.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Human-like AI</h3>
            <p>Feels like a real team member chatting with clients.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Boosts Productivity</h3>
            <p>Handles repetitive requests and frees your team’s time.</p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Works with</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <span>WhatsApp</span>
          <span>Instagram</span>
          <span>Telegram</span>
          <span>Messenger</span>
          <span>Gmail</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Try SmartMatePro</h2>
        <p className="mb-6">Let your business speak smarter</p>
        <button className="bg-black text-white text-lg px-6 py-3 rounded-xl hover:bg-gray-800">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SmartMatePro. All rights reserved.
      </footer>
    </main>
  );
}
