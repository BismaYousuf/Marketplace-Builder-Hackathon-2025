"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, User, Phone, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import emailjs from "@emailjs/browser"
import emailjs from "emailjs-com"


// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")

export default function ContactForm() {
  // State for form inputs
  const [name, setName] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [phone, setPhone] = React.useState<string>("")
  const [message, setMessage] = React.useState<string>("")
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!name || !email || !message) {
      setError("Name, email, and message are required.")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setIsLoading(true)
    setError(null)

    console.log("Sending email with following details:")
    console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
    console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
    console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: name,
          from_email: email,
          from_phone: phone,
          message: message,
        },
      )

      console.log("Email sent successfully:", result)
      alert("Your message has been sent successfully!")

      // Clear form
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    } catch (err) {
      console.error("Failed to send email:", err)
      setError(`Failed to send message. Error: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="relative w-full h-[410px] bg-black m-auto">
        {/* Background Image */}
        <Image
          src={"/menubg.png"}
          alt={"Contact Background"}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Heading on Top of Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Contact Us</h1>

          {/* Paragraph with Hover Effect */}
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"}>
              <span className="transition-colors duration-300">Home</span>
            </Link>
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-orange-500">Contact</span>
          </p>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-4 -mt-10">
        <div className="w-full max-w-[424px] bg-white p-8 shadow-[0px_4px_80px_rgba(255,159,13,0.15)] rounded-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h2>

          {/* Display error message */}
          {error && <div className="mb-4 p-2 bg-red-100 text-red-600 text-sm rounded">{error}</div>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <Input
                type="text"
                placeholder="Your Name"
                className="pl-12 h-11 border-gray-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <User className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
            </div>

            <div className="relative">
              <Input
                type="email"
                placeholder="Your Email"
                className="pl-12 h-11 border-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
            </div>

            <div className="relative">
              <Input
                type="tel"
                placeholder="Your Phone (optional)"
                className="pl-12 h-11 border-gray-200"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Phone className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
            </div>

            <div className="relative">
              <Textarea
                placeholder="Your Message"
                className="pl-4 pt-3 h-32 border-gray-200"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 h-11" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

