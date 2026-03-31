import CommunityCard from "@/components/common/community-card";
import CreatePostForm from "@/features/community/components/create-post-form";

export default function CommunityForum() {
  return (
    <>
      <section className="w-full rounded-md overflow-hidden relative bg-linear-to-r from-[#c7f238] via-[#d7f97c] to-[#e5fbc4]">
        <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6 md:py-8">
          {/* Text content */}
          <div>
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-1">
              Community Forum
            </h2>
            <p className="text-white/80 text-xs md:text-sm">
              Ask questions, get answers, and grow with fellow developers.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <div>
          {/* Community Form */}
          <CreatePostForm />
          {/* Community Feed */}
          <div className="flex flex-col gap-5 mt-8">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>
      </section>
    </>
  );
}
