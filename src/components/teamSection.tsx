import { TeamMemberCard } from "./teamMemberCards"

const teamMembers = [
  {
    name: "Mark Henry",
    role: "Owner",
    imageUrl: "/teampic.png",
  },
  {
    name: "Lucky Helen",
    role: "Chef",
    imageUrl: "/placeholder.svg?height=398&width=312",
  },
  {
    name: "Moon Henry",
    role: "Founder",
    imageUrl: "/placeholder.svg?height=398&width=312",
  },
  {
    name: "Tom Monrow",
    role: "Specialist",
    imageUrl: "/placeholder.svg?height=398&width=312",
  },
]

export default function TeamSection() {
  return (
    <section className="relative">
      {/* Orange Background Section */}
      <div className="bg-[#FF9F0D]/85 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center text-black mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Team Member</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4 -mt-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

