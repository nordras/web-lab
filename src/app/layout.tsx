import React from 'react'
import './globals.css'
import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Web Lab',
  description: 'A web development laboratory for experimenting web features.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}