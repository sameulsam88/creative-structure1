export type Service = { icon: string; title: string; desc: string };
export type Project = { img: string; cat: string; title: string; blurb: string; span: string };
export type Testimonial = { quote: string; name: string; role: string; town: string };
export type Step = { n: string; title: string; desc: string };
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  { icon: "home", title: "Residential Construction", desc: "Ground-up homes, additions, and structural work built to code and built to last." },
  { icon: "building", title: "Commercial Construction", desc: "Reliable contracting for offices, retail, and light commercial facilities." },
  { icon: "reno", title: "Renovations & Remodeling", desc: "Full-home and room-by-room remodels that modernize without cutting corners." },
  { icon: "interior", title: "Commercial Build-Outs & Tenant Improvements", desc: "Turnkey fit-outs delivered on schedule so you can open your doors sooner." },
  { icon: "improve", title: "Interior & Exterior Improvements", desc: "Targeted upgrades that raise comfort, curb appeal, and property value." },
  { icon: "frame", title: "Framing & Carpentry", desc: "Precision framing, structural carpentry, and custom woodwork by skilled hands." },
  { icon: "drywall", title: "Drywall Installation & Finishing", desc: "Clean hanging, taping, and smooth finishes ready for a flawless paint coat." },
  { icon: "floor", title: "Flooring Installation", desc: "Hardwood, laminate, tile, and vinyl laid level, tight, and true." },
  { icon: "paint", title: "Painting", desc: "Interior and exterior painting with sharp lines and durable, even coverage." },
  { icon: "concrete", title: "Concrete & Masonry Work", desc: "Slabs, walkways, patios, block, and brickwork done right the first time." },
  { icon: "window", title: "Door & Window Installation", desc: "Energy-efficient replacements and new openings, flashed and sealed properly." },
  { icon: "exterior", title: "Property Improvements", desc: "Siding, trim, and exterior repairs that protect and refresh your building." },
  { icon: "repair", title: "General Repairs & Construction Services", desc: "Punch lists, repairs, and the in-between jobs most contractors won't touch." },
  { icon: "manage", title: "Project Coordination & Construction Management", desc: "One point of contact managing trades, schedule, permits, and quality." },
];

export const projects: Project[] = [
  {
    img: "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1000",
    cat: "Residential",
    title: "New Home Construction",
    blurb: "Full framing-to-finish residential build in Passaic County.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    img: "https://images.pexels.com/photos/35493910/pexels-photo-35493910.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=700",
    cat: "Renovations",
    title: "Kitchen Remodel",
    blurb: "Cabinetry, counters, and finishes for a brighter heart of the home.",
    span: "lg:col-span-2",
  },
  {
    img: "https://images.pexels.com/photos/8146325/pexels-photo-8146325.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=700",
    cat: "Renovations",
    title: "Bathroom Renovation",
    blurb: "Warm, modern bath with custom millwork and tile.",
    span: "lg:col-span-1",
  },
  {
    img: "https://images.pexels.com/photos/15456627/pexels-photo-15456627.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=700",
    cat: "Structural",
    title: "Framing & Carpentry",
    blurb: "Engineered roof trusses set true against a clear sky.",
    span: "lg:col-span-1",
  },
  {
    img: "https://images.pexels.com/photos/33405084/pexels-photo-33405084.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=700",
    cat: "Commercial",
    title: "Interior Build-Out",
    blurb: "Coordinated tenant improvement from open shell to finished space.",
    span: "lg:col-span-2",
  },
  {
    img: "https://images.pexels.com/photos/6835130/pexels-photo-6835130.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=700",
    cat: "Finishes",
    title: "Interior Finishes",
    blurb: "Crisp trim, cabinetry, and detailing that complete the job.",
    span: "lg:col-span-2",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Creative Structures handled our second-story addition from permits to paint. The crew showed up on time, the site was always clean, and the finished work is straighter than the original house. We'd hire them again in a heartbeat.",
    name: "Michael & Dana R.",
    role: "Homeowners",
    town: "Wayne, NJ",
  },
  {
    quote:
      "Our kitchen and basement remodel came in on budget and on schedule. They coordinated every trade so we didn't have to chase anyone.",
    name: "Priya S.",
    role: "Property Owner",
    town: "Clifton, NJ",
  },
  {
    quote:
      "They built out our office suite over a single weekend stretch so we never missed a business day. Professional, tidy, and easy to reach.",
    name: "James T.",
    role: "Facilities Manager",
    town: "Paterson, NJ",
  },
];

export const towns: string[] = [
  "North Haledon",
  "Haledon",
  "Paterson",
  "Prospect Park",
  "Hawthorne",
  "Wayne",
  "Totowa",
  "Woodland Park",
  "Clifton",
  "Passaic",
  "Pompton Lakes",
  "Ridgewood",
  "Fair Lawn",
  "Paramus",
  "Hackensack",
  "Elmwood Park",
];

export const steps: Step[] = [
  { n: "01", title: "Consultation", desc: "We walk the site, listen to your goals, and talk through what's possible." },
  { n: "02", title: "Detailed Estimate", desc: "A clear, line-item proposal — no surprises and no pressure." },
  { n: "03", title: "Planning & Permits", desc: "We coordinate drawings, materials, and any required local permits." },
  { n: "04", title: "Construction", desc: "Skilled crews build with daily communication and a clean job site." },
  { n: "05", title: "Final Walkthrough", desc: "We inspect every detail with you and stand behind the finished work." },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years Building in NJ" },
  { value: 240, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "", label: "Skilled Crew Members" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const serviceOptions = services.map((s) => s.title).concat(["General Inquiry / Other"]);

export const heroImage ="img1.png";
export const aboutImage =
  "img2.png";
export const aboutImage2 =
  "https://images.pexels.com/photos/8961400/pexels-photo-8961400.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=900";

export const contact = {
  phone: "(862) 251-0557",
  phoneHref: "tel:+18622510557",
  address: "29 West Overlook Avenue",
  city: "North Haledon, NJ 07508",
  email: "info@creativestructuresnj.com",
  hours: [
    { d: "Monday – Friday", h: "7:00 AM – 6:00 PM" },
    { d: "Saturday", h: "8:00 AM – 3:00 PM" },
    { d: "Sunday", h: "Closed" },
  ],
};
