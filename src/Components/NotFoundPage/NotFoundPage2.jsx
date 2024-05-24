/* eslint-disable no-unused-vars */
import React from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Pagination from '../Shop/Pagination'

function NotFoundPage2() {
  return (
    <>
    <div className="mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center">
    <div>
      <div>
        <p className="text-sm font-semibold text-black">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex items-center gap-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </button>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <div>
          <a
            href="#"
            className="hover:underlin inline-flex items-center gap-x-2 text-sm font-semibold text-black"
          >
            <span>Documentation</span>
            <ArrowRight size={16} />
          </a>
          <p className="mt-2 text-sm text-gray-500">Dive in to learn all about our product.</p>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline"
            >
            <span>Our blog</span>
            <ArrowRight size={16} />
          </a>
          <p className="mt-2 text-sm text-gray-500">Read the latest posts on our blog.</p>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline"
            >
            <span>Chat to support</span>
            <ArrowRight size={16} />
          </a>
          <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
        </div>
      </div>
    </div>
    <div className="hidden lg:block">
      <img
        src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="404"
        className="h-full w-full rounded-md object-cover"
        />
    </div>
  </div>
  {/* <Pagination /> */}
        </>
  )
}

export default NotFoundPage2