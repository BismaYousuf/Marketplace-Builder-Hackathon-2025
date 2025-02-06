import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
}


console.log("🔥",process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);