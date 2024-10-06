import React, { useState } from 'react';
import Footer from '../components/Footer';

const SubmissionForm = () => {
  const [category, setCategory] = useState('');

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-24">
        <h1 className="text-3xl font-bold mb-8 text-center text-mm-dark">Virtual Music Competition Submission</h1>
        <form action="https://formspree.io/f/xovqanqa" method="POST" className="space-y-6" encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-mm-dark">Full Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mm-blue focus:ring focus:ring-mm-blue focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-mm-dark">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mm-blue focus:ring focus:ring-mm-blue focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-mm-dark">Grade</label>
              <input type="text" id="grade" name="grade" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mm-blue focus:ring focus:ring-mm-blue focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="instrument" className="block text-sm font-medium text-mm-dark">Instrument</label>
              <input type="text" id="instrument" name="instrument" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mm-blue focus:ring focus:ring-mm-blue focus:ring-opacity-50" />
            </div>
          </div>

          <div className="text-center">
            <label className="block text-sm font-medium text-mm-dark mb-2">What category are you submitting for?</label>
            <div className="flex justify-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="category" value="Composition" onChange={(e) => setCategory(e.target.value)} className="form-radio text-mm-blue" />
                <span className="ml-2">Composition</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="category" value="Performance" onChange={(e) => setCategory(e.target.value)} className="form-radio text-mm-blue" />
                <span className="ml-2">Performance</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="piece" className="block text-sm font-medium text-mm-dark">Piece Name</label>
              <input type="text" id="piece" name="piece" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mm-blue focus:ring focus:ring-mm-blue focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="composer" className="block text-sm font-medium text-mm-dark">Composer</label>
              <input type="text" id="composer" name="composer" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mm-blue focus:ring focus:ring-mm-blue focus:ring-opacity-50" />
            </div>
          </div>

          <div>
            <label htmlFor="video" className="block text-sm font-medium text-mm-dark">Video Link</label>
            <input type="url" id="video" name="video" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mm-blue focus:ring focus:ring-mm-blue focus:ring-opacity-50" />
          </div>

          {category === 'Composition' && (
            <div className="text-center">
              <label htmlFor="sheetMusic" className="block text-sm font-medium text-mm-dark mb-2">
                If you are submitting for the composition challenge, upload your sheet music here.
              </label>
              <div className="flex justify-center">
                <input 
                  type="file" 
                  id="sheetMusic" 
                  name="sheetMusic" 
                  accept=".pdf"
                  className="mt-1 block w-full max-w-xs text-sm text-mm-dark
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-mm-blue file:text-mm-dark
                             hover:file:bg-mm-dark hover:file:text-white
                             transition-colors duration-300"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-mm-dark">Additional Comments</label>
            <textarea id="comments" name="comments" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mm-blue focus:ring focus:ring-mm-blue focus:ring-opacity-50"></textarea>
          </div>

          <div>
            <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-mm-dark bg-mm-blue hover:bg-mm-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mm-blue transition duration-150 ease-in-out">
              Submit Entry
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SubmissionForm;