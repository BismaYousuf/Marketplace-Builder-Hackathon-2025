// "use client";

// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Mail, Lock, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function SignInForm() {
//   // State for form inputs
//   const [email, setEmail] = React.useState<string>("");
//   const [password, setPassword] = React.useState<string>("");
//   const [rememberMe, setRememberMe] = React.useState<boolean>(false);
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);
//   const [error, setError] = React.useState<string | null>(null);

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !password) {
//       setError("All fields are required.");
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     try {
//       // Simulate API call
//       const response = await fetch("/api/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password, rememberMe }),
//       });

//       if (!response.ok) {
//         throw new Error("Sign in failed. Please check your credentials.");
//       }

//       const data = await response.json();
//       console.log("Sign in successful:", data);

//       // Redirect or show success message
//       alert("Sign in successful!");
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Something went wrong.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="relative w-full h-[410px] bg-black m-auto">
//         {/* Background Image */}
//         <Image
//           src={"/menubg.png"}
//           alt={"Menu Background"}
//           layout="fill"
//           objectFit="cover"
//           className="absolute top-0 left-0 w-full h-full"
//         />

//         {/* Heading on Top of Image */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
//           {/* Heading */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
//             Sign In Form
//           </h1>

//           {/* Paragraph with Hover Effect */}
//           <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
//             <Link href={"/"}>
//               <span className="transition-colors duration-300">Home</span>
//             </Link>
//             <ChevronRight
//               size={16}
//               className="text-white transition-colors duration-300 group-hover:text-orange-500"
//             />
//             <span className="transition-colors duration-300 text-orange-500">
//               Sign In
//             </span>
//           </p>
//         </div>
//       </div>

//       <div className="min-h-screen flex items-center justify-center p-4 -mt-10">
//         <div className="w-full max-w-[424px] bg-white p-8 shadow-[0px_4px_80px_rgba(255,159,13,0.15)] rounded-sm">
//           <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign In</h2>

//           {/* Display error message */}
//           {error && (
//             <div className="mb-4 p-2 bg-red-100 text-red-600 text-sm rounded">
//               {error}
//             </div>
//           )}

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="relative">
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 className="pl-12 h-11 border-gray-200"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Mail className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
//             </div>

//             <div className="relative">
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 className="pl-12 h-11 border-gray-200"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Lock className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <Checkbox
//                   id="remember"
//                   className="bg-[#FF9F0D] border-0"
//                   checked={rememberMe}
//                   onCheckedChange={(checked) =>
//                     setRememberMe(checked as boolean)
//                   }
//                 />
//                 <label
//                   htmlFor="remember"
//                   className="text-sm leading-none text-gray-800"
//                 >
//                   Remember me?
//                 </label>
//               </div>
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 h-11"
//               disabled={isLoading}
//             >
//               {isLoading ? "Signing In..." : "Sign In"}
//             </Button>

//             <div className="text-right">
//               <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
//                 Forget password?
//               </a>
//             </div>

//             <div className="relative my-8">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 text-gray-600 bg-white border border-gray-200">
//                   OR
//                 </span>
//               </div>
//             </div>

//             <Button variant="outline" className="w-full h-11 mb-3">
//               <Image
//                 src="/google.jpeg"
//                 alt="Google"
//                 width={20}
//                 height={20}
//                 className="w-5 h-5 mr-2"
//               />
//               Sign in with Google
//             </Button>

//             <Button variant="outline" className="w-full h-11">
//               <Image
//                 src="/apple.png"
//                 alt="Apple"
//                 width={20}
//                 height={20}
//                 className="w-5 h-5 mr-2"
//               />
//               Sign in with Apple
//             </Button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


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

































function send(arg0: string, arg1: string, arg2: { from_name: string; from_email: string; from_phone: string; message: string }, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string | undefined) {
  throw new Error("Function not implemented.")
}
// "use client"

// import * as React from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, User, Phone, ChevronRight } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// export default function ContactForm() {
//   // State for form inputs
//   const [name, setName] = React.useState<string>("")
//   const [email, setEmail] = React.useState<string>("")
//   const [phone, setPhone] = React.useState<string>("")
//   const [message, setMessage] = React.useState<string>("")
//   const [isLoading, setIsLoading] = React.useState<boolean>(false)
//   const [error, setError] = React.useState<string | null>(null)

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     // Basic validation
//     if (!name || !email || !message) {
//       setError("Name, email, and message are required.")
//       return
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address.")
//       return
//     }

//     setIsLoading(true)
//     setError(null)

//     try {
//       // Simulate API call
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, phone, message }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to send message. Please try again later.")
//       }

//       const data = await response.json()
//       console.log("Message sent successfully:", data)

//       // Show success message
//       alert("Your message has been sent successfully!")

//       // Clear form
//       setName("")
//       setEmail("")
//       setPhone("")
//       setMessage("")
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Something went wrong.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <>
//       <div className="relative w-full h-[410px] bg-black m-auto">
//         {/* Background Image */}
//         <Image
//           src={"/menubg.png"}
//           alt={"Contact Background"}
//           layout="fill"
//           objectFit="cover"
//           className="absolute top-0 left-0 w-full h-full"
//         />

//         {/* Heading on Top of Image */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
//           {/* Heading */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Contact Us</h1>

//           {/* Paragraph with Hover Effect */}
//           <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
//             <Link href={"/"}>
//               <span className="transition-colors duration-300">Home</span>
//             </Link>
//             <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
//             <span className="transition-colors duration-300 text-orange-500">Contact</span>
//           </p>
//         </div>
//       </div>

//       <div className="min-h-screen flex items-center justify-center p-4 -mt-10">
//         <div className="w-full max-w-[424px] bg-white p-8 shadow-[0px_4px_80px_rgba(255,159,13,0.15)] rounded-sm">
//           <h2 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h2>

//           {/* Display error message */}
//           {error && <div className="mb-4 p-2 bg-red-100 text-red-600 text-sm rounded">{error}</div>}

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="relative">
//               <Input
//                 type="text"
//                 placeholder="Your Name"
//                 className="pl-12 h-11 border-gray-200"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <User className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
//             </div>

//             <div className="relative">
//               <Input
//                 type="email"
//                 placeholder="Your Email"
//                 className="pl-12 h-11 border-gray-200"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Mail className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
//             </div>

//             <div className="relative">
//               <Input
//                 type="tel"
//                 placeholder="Your Phone (optional)"
//                 className="pl-12 h-11 border-gray-200"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//               <Phone className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
//             </div>

//             <div className="relative">
//               <Textarea
//                 placeholder="Your Message"
//                 className="pl-4 pt-3 h-32 border-gray-200"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>

//             <Button type="submit" className="w-full bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 h-11" disabled={isLoading}>
//               {isLoading ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

