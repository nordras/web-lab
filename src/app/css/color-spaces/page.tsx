'use client'

import { useState } from 'react'
import './color-spaces.scss'

export default function ColorSpacesPage() {
  const [hue, setHue] = useState(250)

  return (
    <div className="demo-container">
      <div className="color-demo">
        <div 
          className="color-box oklch"
          style={{ '--hue': hue } as React.CSSProperties}
        >
          <span>OKLCH</span>
        </div>
        <div 
          className="color-box rgb"
          style={{ '--hue': hue } as React.CSSProperties}
        >
          <span>RGB</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="360" 
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
        />
        <p>Hue: {hue}°</p>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Color Space Acronyms</h3>
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600 to-blue-600">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Space</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Component</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-purple-50 transition-colors">
                <td rowSpan={4} className="px-6 py-3 font-bold text-purple-700 border-r border-gray-200 bg-purple-50/50">OKLCH</td>
                <td className="px-6 py-3 text-sm text-gray-800 font-mono bg-gray-50">OK</td>
                <td className="px-6 py-3 text-sm text-gray-600">Oklab (base color space)</td>
              </tr>
              <tr className="hover:bg-purple-50 transition-colors">
                <td className="px-6 py-3 text-sm text-gray-800 font-mono bg-gray-50">L</td>
                <td className="px-6 py-3 text-sm text-gray-600">Lightness</td>
              </tr>
              <tr className="hover:bg-purple-50 transition-colors">
                <td className="px-6 py-3 text-sm text-gray-800 font-mono bg-gray-50">C</td>
                <td className="px-6 py-3 text-sm text-gray-600">Chroma (saturation)</td>
              </tr>
              <tr className="hover:bg-purple-50 transition-colors">
                <td className="px-6 py-3 text-sm text-gray-800 font-mono bg-gray-50">H</td>
                <td className="px-6 py-3 text-sm text-gray-600">Hue</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td rowSpan={3} className="px-6 py-3 font-bold text-blue-700 border-r border-gray-200 bg-blue-50/50">RGB</td>
                <td className="px-6 py-3 text-sm text-gray-800 font-mono bg-gray-50">R</td>
                <td className="px-6 py-3 text-sm text-gray-600">Red</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-3 text-sm text-gray-800 font-mono bg-gray-50">G</td>
                <td className="px-6 py-3 text-sm text-gray-600">Green</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-3 text-sm text-gray-800 font-mono bg-gray-50">B</td>
                <td className="px-6 py-3 text-sm text-gray-600">Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}