import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-canvas px-5 text-center">
      <div>
        <p className="font-serif text-8xl text-brand-600 italic md:text-9xl">404</p>
        <h1 className="mt-4 text-3xl">This page took a sick day.</h1>
        <p className="mt-3 text-muted">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary mt-8">
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>
    </section>
  )
}
