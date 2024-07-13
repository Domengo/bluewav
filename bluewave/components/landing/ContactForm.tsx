// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardDescription,
//   CardFooter,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// export function ContactForm() {
//   const handleSubmit = (event: { preventDefault?: any; target?: any; }) => {
//     event.preventDefault();
//     const { target } = event;
//     const data = {
//       name: target.name.value,
//       email: target.email.value,
//       message: target.message.value,
//     };
//     fetch("/api/mail", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error("Error:", error));
//   };

//   return (
//     <form className="container mx-auto px-4" onSubmit={handleSubmit}>
//       <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
//       <Card className="max-w-lg mx-auto animate-fade-in-up">
//         <CardHeader>
//           <CardTitle>Request Our Services</CardTitle>
//           <CardDescription>
//             Fill out the form below to get in touch with us.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" placeholder="Enter your name" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" placeholder="Enter your email" type="email" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="message">Message</Label>
//               <Textarea
//                 id="message"
//                 placeholder="Enter your message"
//                 className="min-h-[100px]"
//               />
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="ml-auto animate-fade-in-up">Send Message</Button>
//         </CardFooter>
//       </Card>
//     </form>
//   );
// }
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

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setResponseMessage("Error: Unable to send email");
    } finally {
      setIsLoading(false);
    }
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
