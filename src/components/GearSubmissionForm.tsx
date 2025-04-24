
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase, GearSubmission } from '@/lib/supabaseClient';
status
export const GearSubmissionForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<GearSubmission>({
    gear_type: '',
    society: '',
    phone: '',
    goodasnewgear:'',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);  // Set submitting state to true during submission
  
    try {
      // Make sure formData is correctly structured, and insert it into the 'gear_submissions' table
      const { error } = await supabase
        .from('gear_submissions')  // Replace 'gear_submissions' with your actual table name
        .insert([formData]);
  
      // If there's an error, throw it to be caught in the catch block
      if (error) {
        throw error;
      }
  
      // Success handling: set success state, clear the form, and show success toast
      setIsSuccess(true);
      setFormData({ gear_type: '', society: '', phone: '', goodasnewgear: '', });  // Clear form data
  
      toast({                 
        title: "Success!",
        description: "We've received your information and will be in touch soon.",
      });
    } catch (error) {
      // Log the error and show an error toast
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",  // Use variant for a more prominent error message
      });
    } finally {
      setIsSubmitting(false);  // Reset submitting state after the process completes
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm border border-primary/10 shadow-lg">
      <CardContent className="pt-6">
        {isSuccess ? (
          <div className="text-center py-10">
            <h3 className="baby-font text-primary text-2xl md:text-3xl font-bold mb-4">
              Thanks!
            </h3>
            <p className="text-primary/80 text-lg mb-6">
              We'll get in touch soon.
            </p>
            <Button 
              className="baby-button baby-font bg-primary hover:bg-primary/90 text-white text-lg px-6 py-5 rounded-xl"
              onClick={() => setIsSuccess(false)}
            >
              Submit Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="baby-font text-primary text-2xl md:text-3xl font-bold mb-4 text-center">
              Share Your Baby Gear
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gear_type" className="baby-font text-lg">Type of Baby Gear</Label>
                <Input
                  id="gear_type"
                  name="gear_type"
                  className="text-lg h-12" 
                  placeholder="Stroller, Crib, Car Seat, etc."
                  value={formData.gear_type}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="society" className="baby-font text-lg">Name of Society or Place</Label>
                <Input
                  id="society"
                  name="society"
                  className="text-lg h-12"
                  placeholder="Your society or area name"
                  value={formData.society}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="baby-font text-lg">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="text-lg h-12"
                  placeholder="Your contact number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="note" className="baby-font text-lg">Is your baby gear  'good as new' & superior condition c- list with us to earn rental income?</Label>
              <Input
                id="goodasnewgear"
                name="goodasnewgear"
                className="text-lg h-12"
                placeholder="Optional note (e.g., yes (stroller), no)"
                value={formData.goodasnewgear}
                onChange={handleChange}
                 />
              </div>

            <div className="pt-2">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="baby-button baby-font w-full bg-primary hover:bg-primary/90 text-white text-xl md:text-2xl px-8 py-6 rounded-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Share Joy"}
                {!isSubmitting && <ArrowRight className="ml-2" />}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
