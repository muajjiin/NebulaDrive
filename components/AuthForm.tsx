"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type FormType = "sign-in" | "sign-up";

interface AuthFormProps {
  type: FormType;
}

const authFormSchema = (type: FormType) => {
  return z.object({
    username: z.string().min(2, "Username must be at least 2 characters").max(50),
    fullName:
      type === "sign-up"
        ? z.string().min(2, "Full Name must be at least 2 characters").max(100)
        : z.string().optional(),
  });
};

const AuthForm = ({ type }: AuthFormProps) => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
        <h1 className="form-title">{type === "sign-in" ? "Sign In" : "Sign Up"}</h1>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {type === "sign-up" && (
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" className="form-submit-button" disabled={isLoading}>
          {type === "sign-in" ? "Sign In" : "Sign Up"}
          {isLoading && (
            <img src="/assets/icons/loader.svg" alt="loader" width={20} height={20} className="ml-2 animate-spin" />
          )}
        </Button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="body-2 flex justify-center">
          <p className="text-light-100">
            {type === "sign-in" ? "Don't have an account? " : "Already have an account? "}
          </p>
          <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="ml-1 font-medium text-brand-100">
            {type === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
