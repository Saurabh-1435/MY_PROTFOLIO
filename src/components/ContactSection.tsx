
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you soon."
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Connect & <span className="text-red-500">Collaborate</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glassmorphism p-6 rounded-lg hover-glow group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500 transition-colors">
                  <Mail className="w-6 h-6 text-red-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Address</h3>
                  <p className="text-gray-300">Drop me a line anytime</p>
                </div>
              </div>
              <p className="text-red-400 font-medium">saurabhlakhan4545@gmail.com</p>
            </div>

            <div className="glassmorphism p-6 rounded-lg hover-glow group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500 transition-colors">
                  <Phone className="w-6 h-6 text-red-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone Number</h3>
                  <p className="text-gray-300">Call for urgent queries</p>
                </div>
              </div>
              <p className="text-red-400 font-medium">+91 8530587167</p>
            </div>

            <div className="glassmorphism p-6 rounded-lg hover-glow group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500 transition-colors">
                  <MapPin className="w-6 h-6 text-red-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Based in tech hub</p>
                </div>
              </div>
              <p className="text-red-400 font-medium">Pune, Maharashtra, India</p>
            </div>

            <div className="glassmorphism p-6 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-6">Follow My Journey</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/saurabh-lakhan-015777327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-red-500/20 rounded-lg hover:bg-blue-600 transition-all duration-300 group hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-red-500 group-hover:text-white" />
                </a>
                <a 
                  href="https://github.com/Saurabh-1435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-red-500/20 rounded-lg hover:bg-gray-800 transition-all duration-300 group hover:scale-110"
                >
                  <Github className="w-6 h-6 text-red-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism p-8 rounded-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">Send Message</h3>
              <p className="text-gray-400">Tell me about your project and let's make it happen!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 h-12"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 h-12"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 resize-none"
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 text-lg font-semibold hover-glow transition-all duration-300 hover:scale-105"
              >
                Send Message 🚀
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
