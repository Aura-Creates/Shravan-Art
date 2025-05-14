import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Shravan Art",
  description: "Get in touch with Shravan for inquiries, commissions, or exhibition opportunities",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Contact"
          description="Get in touch for inquiries, commissions, or exhibition opportunities"
        />
        
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="prose max-w-none dark:prose-invert mb-8">
              <p>
                I'd love to hear from you! Whether you're interested in purchasing or commissioning artwork, discussing exhibition opportunities, or simply have a question, please don't hesitate to reach out.
              </p>
              <p>
                I try to respond to all inquiries within 48 hours.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contact@shravanart.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Studio Location</h3>
                  <p className="text-muted-foreground">123 Artist Lane, Studio 405<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Studio Hours</h3>
                  <p className="text-muted-foreground">
                    Tuesday - Friday: 10am - 6pm<br />
                    Saturday: 12pm - 5pm<br />
                    Sunday & Monday: Closed
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Studio visits by appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}