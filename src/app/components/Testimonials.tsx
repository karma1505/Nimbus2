import InfiniteMovingCards from '../components/InfiniteMovingCards';

const testimonialsItems = [
  { quote: "Amazing service!", name: "John Doe", title: "CEO" },
  { quote: "Excellent support.", name: "Jane Smith", title: "CTO" },
  { quote: "Great experience!", name: "Emily Davis", title: "COO" },
];

const Testimonials = () => (
  <InfiniteMovingCards items={testimonialsItems} />
);

export default Testimonials;
