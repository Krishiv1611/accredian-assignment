"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  industry: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function EnquireModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      industry: "",
      message: "",
    },
  });

  const messageValue = form.watch("message");

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (messageValue && messageValue.length > 5) {
        try {
          const res = await fetch("/api/assistant", {
            method: "POST",
            body: JSON.stringify({ message: messageValue }),
          });
          const data = await res.json();
          setSuggestion(data.suggestion);
        } catch (e) {}
      } else {
        setSuggestion("");
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [messageValue]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 3000);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Let's Transform Your Team</DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="text-center py-10 space-y-4">
            <div className="text-5xl">🎉</div>
            <h3 className="text-xl font-bold text-green-600">Enquiry Submitted!</h3>
            <p className="text-slate-600">Our team will reach out to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input placeholder="Full Name *" {...form.register("name")} />
              {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
            </div>
            <div>
              <Input placeholder="Work Email *" type="email" {...form.register("email")} />
              {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
            </div>
            <div>
              <Input placeholder="Industry (Optional)" {...form.register("industry")} />
            </div>
            <div className="relative pb-6">
              <textarea
                placeholder="How can we help your team? *"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                {...form.register("message")}
              />
              {form.formState.errors.message && <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>}
              
              <AnimatePresence>
                {suggestion && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute bottom-0 left-0 right-0 bg-blue-100 text-blue-800 text-xs p-2 rounded-md border border-blue-200 z-10 shadow-sm"
                  >
                    ✨ <strong>AI Tip:</strong> {suggestion}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
