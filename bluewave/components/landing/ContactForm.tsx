'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const mailtoLink = `mailto:dominicsengo@gmail.com?subject=New Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;

    setResponseMessage("Redirecting to email client...");
    setIsLoading(false);
  
    // const data = {
    //   name,
    //   email,
    //   message,
    // };

    // try {
    //   const response = await fetch("/api/mail", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   const result = await response.json();

    //   if (response.ok) {
    //     setResponseMessage("Email sent successfully!");
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   } else {
    //     setResponseMessage(`Error Try Again`);
    //   }
    // } catch (error) {
    //   setResponseMessage("Error: Unable to send email");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form className="container mx-auto px-4" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <Card className="max-w-lg mx-auto animate-fade-in-up">
        <CardHeader>
          <CardTitle>Request Our Services</CardTitle>
          <CardDescription>
            Fill out the form below to get in touch with us.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[100px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </CardFooter>
      </Card>
      {responseMessage && (
        <p className="text-center mt-4">{responseMessage}</p>
      )}
    </form>
  );
}
