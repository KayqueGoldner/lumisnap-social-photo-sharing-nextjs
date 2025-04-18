"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCreatePostModal } from "../hooks/use-create-post-modal";
import {
  CreatePostSchema,
  createPostSchema,
} from "../schemas/create-post-schema";
import { Textarea } from "@/components/ui/textarea";

export const CreatePostModal = () => {
  const { isOpen, onClose } = useCreatePostModal();

  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      content: "",
      images: [],
      location: "",
      tags: [],
      category: "",
    },
  });

  const onSubmit = (data: CreatePostSchema) => {
    console.log(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="pb-2">
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            {/* image upload field */}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
