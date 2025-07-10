import React, { useState } from 'react'
import {
  Home,
  Users,
  Mail,
  Shield,
  Menu,
  X,
  Star,
  Trophy,
  CheckCircle,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */
interface Provider {
  id: string
  rank: number
  isBestValue: boolean
  logo: string
  name: string
  offer: string
  features: string[]
  rating: number
  ratingLabel: string
  link: string
}

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                               */
/* -------------------------------------------------------------------------- */
const getRatingColor = (rating: number) => {
  if (rating >= 9.5) return 'text-green-600'
  if (rating >= 9.0) return 'text-blue-600'
  if (rating >= 8.5) return 'text-orange-600'
  return 'text-slate-600'
}

const getStarCount = (rating: number) => {
  if (rating >= 9.0) return 5
  if (rating >= 8.5) return 4
  return 4
}

/* -------------------------------------------------------------------------- */
/*                               Provider Card                                */
/* -------------------------------------------------------------------------- */
function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 relative ${
        provider.isBestValue ? 'border-blue-500' : 'border-slate-200'
      }`}
    >
      {/* Rank */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
        {provider.rank}
      </div>

      {/* Best value badge */}
      {provider.isBestValue && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
          <Trophy className="w-4 h-4 inline-block mr-1" /> BEST VALUE OVERALL
        </div>
      )}

      <div className="p-6 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          {/* Column 1: Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={provider.logo}
              alt={`${provider.name} logo`}
              className="w-24 h-12 object-contain rounded-md shadow-md"
            />
          </div>

          {/* Column 2: Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {provider.name}
            </h3>
            <span className="text-sm text-slate-500 font-medium">Provider</span>
          </div>

          {/* Column 3: Offer & features */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="text-sm font-bold text-red-800 text-center">
              {provider.offer}
            </div>
            <ul className="space-y-2 mt-4">
              {provider.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Rating */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <div className={`text-3xl font-bold ${getRatingColor(provider.rating)} mb-1`}>
                {provider.rating}
              </div>
              <div className="text-sm text-slate-600 font-medium mb-2">
                {provider.ratingLabel}
              </div>
              <div className="flex justify-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < getStarCount(provider.rating) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Column 5: CTA */}
          <div className="flex items-center justify-center h-full">
            <a
              href={provider.link}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-200 shadow-md w-full md:w-auto text-center"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   App                                      */
/* -------------------------------------------------------------------------- */
export default function App() {
  const [activeNav, setActiveNav] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)

  const providers: Provider[] = [
    {
      id: 'remedy-meds',
      rank: 1,
      isBestValue: true,
      logo: '/logos/remedy-meds.png',
      name: 'Remedy Meds',
      offer: '🔥 Limited Offer $120 Off Your First Month!',
      features: [
        'Get medication like Ozempic, Semaglutide & Tirzepatide',
        'Get approved with a quick 2 minute quiz',
        'No insurance needed',
      ],
      rating: 9.9,
      ratingLabel: 'Excellent',
      link: '#',
    },
    {
      id: 'future-health',
      rank: 2,
      isBestValue: false,
      logo: '/logos/mochi.png',
      name: 'FutureHealth',
      offer: '📈 Lose Up To 1.5% Body Weight Weekly',
      features: [
        'Access to GLP-1 like Semaglutide & Tirzepatide',
        'Quick 3 minute approval process',
        'Expert made meal plans',
      ],
      rating: 9.7,
      ratingLabel: 'Great',
      link: '#',
    },
    {
      id: 'sprout',
      rank: 3,
      isBestValue: false,
      logo: '/logos/willow.png',
      name: 'Sprout',
      offer: '💰 $50 Off First Month, Fast Shipping Nationwide',
      features: [
        'Specialized in GLP-1 Semaglutide',
        'Everything included with every plan',
        'Lose 15 – 25% of body weight in 12 months',
      ],
      rating: 9.3,
      ratingLabel: 'Great',
      link: '#',
    },
    {
      id: 'prime-health',
      rank: 4,
      isBestValue: false,
      logo: '/logos/fella.png',
      name: 'Prime Health',
      offer: '⚡ No Waitlist, No Insurance Needed',
      features: [
        'Get compound GLP-1 like Semaglutide & Tirzepatide',
        'Quick 2 minute approval process',
        '30-day weight loss guarantee',
      ],
      rating: 8.9,
      ratingLabel: 'Good',
      link: '#',
    },
    {
      id: 'shed',
      rank: 5,
      isBestValue: false,
      logo: '/logos/delilah.png',
      name: 'SHED',
      offer: '👨‍⚕️ 1 on 1 Health Coaching, Personalized Plans',
      features: [
        'Get weight loss medication like Ozempic & Wegovy',
        '1 on 1 health coaching available',
        'Custom Semaglutide & Tirzepatide plans',
      ],
      rating: 8.8,
      ratingLabel: 'Good',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex">
      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6">
          <h2 className="text-3xl font-bold text-blue-600">GLP1.cc</h2>
        </div>
        <ul className="mt-8 space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => {
                  setActiveNav(item.name)
                  setMobileOpen(false)
                }}
                className={`flex items-center px-6 py-3 text-lg font-medium rounded-lg transition-colors duration-200 ${
                  activeNav === item.name
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" /> {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md bg-white shadow-md text-slate-600"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Main */}
      <main className="flex-1 md:ml-64 p-6 lg:p-10">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 lg:p-12 shadow-lg mb-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            🚀 Best GLP-1 Weight Loss Injections in 2025
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6 opacity-90">
            💊 Compare Top GLP-1 Medications & Providers
          </h2>
          <p className="text-lg opacity-80 max-w-2xl">
            We rank the top Telehealth platforms providing weight loss medication like Ozempic and Mounjaro. The telehealth companies listed also provide custom Semaglutide and Tirzepatide plans.
          </p>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
          {providers.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </section>

        {/* Top pick */}
        <section className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
          <h3 className="text-3xl font-bold text-slate-800 mb-6">🏆 OUR TOP PICK</h3>
          {providers
            .filter((p) => p.isBestValue)
            .map((p) => (
              <div
                key={p.id}
                className="flex flex-col md:flex-row items-center bg-blue-50 rounded-lg p-6 gap-6"
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="w-32 h-16 object-contain rounded-md shadow-md"
                />

                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-blue-700 mb-2">{p.name}</h4>
                  <div className="text-xl font-semibold text-red-600 mb-4">{p.offer}</div>
                  <ul className="space-y-2 mb-4">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.link}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all duration-200 shadow-md inline-block"
                  >
                    🚀 Visit Website
                  </a>
                </div>

                <div className="text-center">
                  <div className={`text-5xl font-extrabold ${getRatingColor(p.rating)} mb-2`}>
                    {p.rating}
                  </div>
                  <div className="text-lg text-slate-600 font-medium mb-2">{p.ratingLabel}</div>
                  <div className="flex justify-center text-yellow-500 text-2xl">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < getStarCount(p.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </section>
      </main>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               Navigation                                   */
/* -------------------------------------------------------------------------- */
const navigation = [
  { name: 'Home', href: '#', icon: Home },
  { name: 'Weight Loss', href: '#', icon: Users },
  { name: 'Hair Restoration', href: '#', icon: Mail },
  { name: 'NAD+', href: '#', icon: Shield },
]
