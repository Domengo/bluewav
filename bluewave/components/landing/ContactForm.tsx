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

export function ContactForm() {
  return (
    <div className="container mx-auto px-4">
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
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[100px]"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto animate-fade-in-up">Send Message</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
