"use client";

function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p> Failed to Fetch meal data. Please try again Later!</p>
    </main>
  );
}

export default Error;
