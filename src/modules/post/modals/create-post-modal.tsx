"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { toast } from "sonner";

import { trpc } from "@/trpc/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/components/uploadthing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCreatePostModal } from "../hooks/use-create-post-modal";
import {
  CreatePostSchema,
  createPostSchema,
} from "../schemas/create-post-schema";

export const CreatePostModal = () => {
  const { isOpen, onClose } = useCreatePostModal();

  const createPost = trpc.post.create.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      image: "",
      location: "",
      category: "",
      visibility: "PRIVATE",
    },
  });

  const onSubmit = (data: CreatePostSchema) => {
    createPost.mutate(
      {
        content: data.content,
        image: data.image,
        visibility: "PRIVATE",
        location: "test",
        category: "test",
      },
      {
        onSuccess: () => {
          toast.success("Post created successfully");
          form.reset();
          onClose();
        },
      },
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-2">
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-min space-y-4"
          >
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="What's on your mind?"
                      className="border-primary h-[100px] max-h-[160px] rounded-xl border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {!field.value ? (
                      <UploadDropzone
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) =>
                          field.onChange(res[0].ufsUrl)
                        }
                        onUploadError={() => {}}
                        appearance={{
                          container: {
                            padding: "0.5rem",
                          },
                          button: {
                            backgroundColor: "oklch(0.623 0.214 259.815)",
                            paddingInline: "0.5rem",
                            marginBlock: "0.5rem",
                          },
                        }}
                      />
                    ) : (
                      <div className="relative">
                        <Image
                          src={field.value}
                          width={480}
                          height={480}
                          className="h-[480px] w-[480px] rounded-xl object-cover"
                          alt="post"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute -top-2 -right-2 size-6 rounded-full"
                          onClick={() => field.onChange("")}
                        >
                          <IoClose className="size-4" />
                        </Button>
                      </div>
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Location" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Category" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              disabled={createPost.isPending}
              onClick={() => console.log(form.formState.errors)}
            >
              {createPost.isPending ? "Creating..." : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
