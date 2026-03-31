import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

export default function CreatePostForm() {
  return (
    <>
      <form className="rounded-md shadow-sm border p-4 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <Avatar className="size-8 mt-1 ring-2 ring-transparent transition hover:ring-border cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <div className="font-medium text-xs mb-1">Vincent</div>
            <textarea
              className="w-full bg-transparent resize-none border-0 outline-none focus:ring-0 text-sm placeholder:text-muted-foreground min-h-[50px]"
              placeholder="Share what's on your mind 💬"
              rows={2}
              spellCheck={false}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="flex gap-2 items-center"
          >
            <ImageIcon />
            <span className="text-xs">Image/Video</span>
          </Button>
          <Button
            type="submit"
            size="sm"
            className="h-7 px-5 font-medium text-xs"
          >
            Post
          </Button>
        </div>
      </form>
    </>
  );
}
