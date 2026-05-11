import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/../utils/cn";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

type FormStatus = 'idle' | 'success' | 'error' | 'validation_error'

export function ContectForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstname = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const lastname = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const email = (e.currentTarget.elements[2] as HTMLInputElement).value;
    const massage = (e.currentTarget.elements[3] as HTMLInputElement).value;

    if (firstname.length <= 0 || lastname.length <= 0 || email.length <= 0 || massage.length <= 0) {
      setStatus('validation_error')
      return;
    }

    setIsSubmitting(true)
    const formData = {
      name: firstname + " " + lastname,
      email: email,
      message: massage
    }
    try {
      const response = await fetch(import.meta.env.VITE_EMAIL_FORMSPREE as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black" id="contect">
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">Thank You!</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-center">
            Thank you for contacting me! I will get back to you soon.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-blue-500 hover:underline text-sm"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black" id="contact">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Feel free to reach out any time.
      </p>

      {status === 'validation_error' && (
        <p className="mt-3 text-sm text-red-500">Please fill in all fields before submitting.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-500">There was an error submitting the form. Please try again later.</p>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Write your thoughts here..."></textarea>
        </LabelInputContainer>

        <button
          disabled={isSubmitting}
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:opacity-60 disabled:cursor-not-allowed"
          type="submit"
        >
          {isSubmitting ? 'Sending...' : 'Contact Me →'}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <a
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            href="https://github.com/PRIPATEL2206?tab=repositories"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </a>
          <a
            href="mailto:pr63547890@gmail.com"
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconMail className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Mail
            </span>
            <BottomGradient />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-patel-7900b8212"
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              LinkedIn
            </span>
            <BottomGradient />
          </a>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
