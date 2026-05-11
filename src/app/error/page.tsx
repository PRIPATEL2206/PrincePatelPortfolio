import React from 'react'

function ErrorPage() {
  return (
    <div className="container mx-auto">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Submission Error</h1>
        <p className="text-lg mb-4">There was an error submitting the form. Please try again later.</p>
        <a href="/" className="text-blue-500 hover:underline">Go back to the homepage</a>
      </main>
    </div>
  )
}

export default ErrorPage
