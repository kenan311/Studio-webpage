'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  PhotoIcon, 
  VideoCameraIcon,
  UserIcon,
  CogIcon,
  BellIcon,
  HeartIcon,
  ClockIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading admin data
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  // Mock data - in a real app, this would come from an API
  const stats = {
    totalBookings: 24,
    pendingInquiries: 8,
    completedEvents: 16,
    totalRevenue: 125000
  }

  const recentBookings = [
    {
      id: 1,
      clientName: 'Sarah & Michael',
      eventDate: '2024-06-15',
      eventType: 'Wedding',
      package: 'Photo + Video Combo',
      status: 'Confirmed',
      location: 'Napa Valley, CA',
      total: 4500
    },
    {
      id: 2,
      clientName: 'Emma & James',
      eventDate: '2024-07-20',
      eventType: 'Wedding',
      package: 'Wedding Photography',
      status: 'Pending',
      location: 'Central Park, NY',
      total: 2500
    },
    {
      id: 3,
      clientName: 'Lily & David',
      eventDate: '2024-05-10',
      eventType: 'Elopement',
      package: 'Elopement Package',
      status: 'Completed',
      location: 'Big Sur, CA',
      total: 1200
    },
    {
      id: 4,
      clientName: 'Grace & Robert',
      eventDate: '2024-08-05',
      eventType: 'Wedding',
      package: 'Wedding Videography',
      status: 'Confirmed',
      location: 'Tuscany, Italy',
      total: 3000
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      clientName: 'Sarah & Michael',
      eventType: 'Engagement Session',
      date: '2024-03-15',
      time: '2:00 PM',
      location: 'Golden Gate Park, San Francisco',
      status: 'Scheduled'
    },
    {
      id: 2,
      clientName: 'Emma & James',
      eventType: 'Wedding Day',
      date: '2024-07-20',
      time: '10:00 AM',
      location: 'Central Park, NY',
      status: 'Confirmed'
    },
    {
      id: 3,
      clientName: 'Grace & Robert',
      eventType: 'Wedding Day',
      date: '2024-08-05',
      time: '11:00 AM',
      location: 'Tuscany, Italy',
      status: 'Confirmed'
    }
  ]

  const galleries = [
    {
      id: 1,
      clientName: 'Sarah & Michael',
      eventType: 'Engagement Session',
      date: '2024-03-15',
      photoCount: 85,
      videoCount: 0,
      status: 'Ready',
      views: 45
    },
    {
      id: 2,
      clientName: 'Lily & David',
      eventType: 'Elopement',
      date: '2024-05-10',
      photoCount: 200,
      videoCount: 3,
      status: 'Ready',
      views: 78
    },
    {
      id: 3,
      clientName: 'Sophie & Alex',
      eventType: 'Wedding',
      date: '2024-04-20',
      photoCount: 450,
      videoCount: 5,
      status: 'Processing',
      views: 0
    }
  ]

  const tabs = [
    { id: 'overview', name: 'Overview', icon: UserIcon },
    { id: 'bookings', name: 'Bookings', icon: CalendarIcon },
    { id: 'events', name: 'Events', icon: ClockIcon },
    { id: 'galleries', name: 'Galleries', icon: PhotoIcon },
    { id: 'clients', name: 'Clients', icon: UserIcon },
    { id: 'settings', name: 'Settings', icon: CogIcon }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-700'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'Completed':
        return 'bg-blue-100 text-blue-700'
      case 'Ready':
        return 'bg-green-100 text-green-700'
      case 'Processing':
        return 'bg-orange-100 text-orange-700'
      default:
        return 'bg-charcoal-100 text-charcoal-700'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-charcoal-600 font-montserrat">Duke ngarkuar panelin e administratorit...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white py-12 border-b border-cream-200">
          <div className="container-custom">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 text-gold-600 hover:text-gold-700 mb-6 transition-colors duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5" />
                <span>Kthehu në Ballinë</span>
            </button>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div>
                <h1 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal-800 mb-2">
                  Paneli i Administratorit
                </h1>
                <p className="text-charcoal-600 font-montserrat">
                  Menaxhoni biznesin tuaj të fotografisë martesore
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <button className="btn-secondary flex items-center space-x-2">
                  <PlusIcon className="w-5 h-5" />
                  <span>New Booking</span>
                </button>
                <button className="btn-primary flex items-center space-x-2">
                  <BellIcon className="w-5 h-5" />
                  <span>Notifications</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gold-100 text-gold-700 border border-gold-200'
                          : 'text-charcoal-600 hover:bg-cream-100'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="card p-6 text-center">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CalendarIcon className="w-6 h-6 text-gold-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal-800 mb-2">{stats.totalBookings}</h3>
                      <p className="text-charcoal-600">Total Bookings</p>
                    </div>
                    <div className="card p-6 text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ClockIcon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal-800 mb-2">{stats.pendingInquiries}</h3>
                      <p className="text-charcoal-600">Pending Inquiries</p>
                    </div>
                    <div className="card p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircleIcon className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal-800 mb-2">{stats.completedEvents}</h3>
                      <p className="text-charcoal-600">Completed Events</p>
                    </div>
                    <div className="card p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HeartIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal-800 mb-2">${stats.totalRevenue.toLocaleString()}</h3>
                      <p className="text-charcoal-600">Total Revenue</p>
                    </div>
                  </div>

                  {/* Recent Bookings */}
                  <div className="card p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-serif text-2xl font-bold text-charcoal-800">
                        Recent Bookings
                      </h2>
                      <button className="btn-secondary text-sm">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {recentBookings.slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-4 bg-cream-50 rounded-lg">
                          <div className="flex-1">
                            <h3 className="font-semibold text-charcoal-800">{booking.clientName}</h3>
                            <p className="text-sm text-charcoal-600">{booking.eventType} • {new Date(booking.eventDate).toLocaleDateString()}</p>
                            <p className="text-sm text-charcoal-500">{booking.location}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                            <p className="text-sm font-medium text-charcoal-800 mt-1">${booking.total}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Bookings Tab */}
              {activeTab === 'bookings' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="card p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-serif text-2xl font-bold text-charcoal-800">
                        All Bookings
                      </h2>
                      <button className="btn-primary">
                        <PlusIcon className="w-5 h-5 mr-2" />
                        New Booking
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-cream-200">
                            <th className="text-left py-3 px-4 font-medium text-charcoal-700">Client</th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-700">Event</th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-700">Date</th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-700">Package</th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-700">Status</th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-700">Total</th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-700">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentBookings.map((booking) => (
                            <tr key={booking.id} className="border-b border-cream-100">
                              <td className="py-3 px-4">
                                <div>
                                  <p className="font-medium text-charcoal-800">{booking.clientName}</p>
                                  <p className="text-sm text-charcoal-500">{booking.location}</p>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-charcoal-700">{booking.eventType}</td>
                              <td className="py-3 px-4 text-charcoal-700">{new Date(booking.eventDate).toLocaleDateString()}</td>
                              <td className="py-3 px-4 text-charcoal-700">{booking.package}</td>
                              <td className="py-3 px-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 font-medium text-charcoal-800">${booking.total}</td>
                              <td className="py-3 px-4">
                                <div className="flex space-x-2">
                                  <button className="p-2 text-charcoal-600 hover:text-gold-600 transition-colors duration-300">
                                    <EyeIcon className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 text-charcoal-600 hover:text-gold-600 transition-colors duration-300">
                                    <PencilIcon className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 text-charcoal-600 hover:text-red-600 transition-colors duration-300">
                                    <TrashIcon className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Events Tab */}
              {activeTab === 'events' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="card p-8">
                    <h2 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                      Upcoming Events
                    </h2>
                    <div className="space-y-6">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="border border-cream-300 rounded-lg p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-2">
                                {event.eventType}
                              </h3>
                              <p className="text-charcoal-600 mb-4">{event.clientName}</p>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-charcoal-600">
                                  <CalendarIcon className="w-4 h-4" />
                                  <span>{new Date(event.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-charcoal-600">
                                  <ClockIcon className="w-4 h-4" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-charcoal-600">
                                  <MapPinIcon className="w-4 h-4" />
                                  <span>{event.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                                {event.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Galleries Tab */}
              {activeTab === 'galleries' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="card p-8">
                    <h2 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                      Photo Galleries
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {galleries.map((gallery) => (
                        <div key={gallery.id} className="border border-cream-300 rounded-lg p-6">
                          <div className="aspect-video bg-cream-200 rounded-lg mb-4 flex items-center justify-center">
                            <PhotoIcon className="w-12 h-12 text-charcoal-400" />
                          </div>
                          <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-2">
                            {gallery.clientName}
                          </h3>
                          <p className="text-charcoal-600 text-sm mb-4">
                            {gallery.eventType} • {new Date(gallery.date).toLocaleDateString()}
                          </p>
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm text-charcoal-600">
                              <span>{gallery.photoCount} photos</span>
                              {gallery.videoCount > 0 && (
                                <span> • {gallery.videoCount} videos</span>
                              )}
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(gallery.status)}`}>
                              {gallery.status}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-charcoal-500">
                              {gallery.views} views
                            </span>
                            <button className="btn-primary text-sm px-4 py-2">
                              Manage
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="card p-8">
                    <h2 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                      Business Settings
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          value="Wedding Studio"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value="hello@weddingstudio.com"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value="+1 (555) 123-4567"
                          className="input-field"
                        />
                      </div>
                      <div className="pt-4">
                        <button className="btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

