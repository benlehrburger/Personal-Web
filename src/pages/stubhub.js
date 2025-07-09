import img1 from '../images/stubhub/stubhub-img1.png';
import img2 from '../images/stubhub/stubhub-img2.png';
import img3 from '../images/stubhub/stubhub-img3.png';
import img4 from '../images/stubhub/stubhub-img4.png';
import img5 from '../images/stubhub/stubhub-img5.png';

const stubhub_project = {
  title: 'Live Event Virtual Assistance',
  description: 'Launching and scaling StubHub\'s virtual assistant to reduce operational overhead and improve customer support outcomes.',

  sections: [
    {
      subheading: 'The Challenge',
      paragraph: [
        {
          type: 'text',
          content: 'StubHub has long struggled with customer satisfaction, consistently ranking among the lowest in the industry. Over 47% of its Trustpilot reviews are 1-star, many from buyers who either never received their tickets or couldn\'t access them at the event gate. With an 11% contact rate, over 800,000 customers reached out to human agents annually, amounting to nearly $65M in service costs. Unfortunately, those high costs weren\'t buying great outcomes; response times were long, and many agents lacked the training or tools to be truly helpful. I joined StubHub as an Associate Product Manager in 2023, and six months later, was asked to lead a newly formed Access & Help team. Our mission? Make it easier for customers to get the help they need while reducing the burden on our human support team.',
        },
      ],
      image: [
        {
          src: img1,
          caption: 'Access & Help team pillars',
        },
      ],
    },
    {
      subheading: 'Getting Started',
      paragraph: [
        {
          type: 'text',
          content: 'To get started, we first scoped the levers and constraints. Improving access to support and raising its quality were the clearest ways to move the needle, but any solution needed to maintain or reduce our operational costs. That narrowed the focus to self-serve, scalable solutions. Our team (one PM (me), four engineers, and a designer) began by mapping out everything StubHub had already tried, from a static help center to social media support and traditional phone/email lines. We ran empathy workshops, simulated the user experience, and combed through hundreds of support transcripts. From these exercises, we generated a range of ideas and aligned around a north star: build a smarter, more scalable way to support customers through an automated, AI-driven virtual assistant.',
        },
      ],
      image: [
        {
          src: img2,
          caption: 'A/B test deployment framework for contact rate and customer satisfaction',
        },
      ],
    },
    {
      subheading: 'Initial MVP',
      paragraph: [
        {
          type: 'text',
          content: 'We focused our initial efforts downstream, where support issues arise, and prioritized a virtual assistant as our MVP. Rather than reinventing the UI, we embedded our assistant into StubHub\'s existing chat experience by replacing the human entry point with an AI one — a small surface area change with potentially large impact. Our MVP focused solely on onboarding chat users: collecting order details and understanding the contact reason. This predictable, well-bounded interaction let us minimize variability and test safely. We also constrained the model\'s system prompt to prevent misuse and ensure consistent outputs. After evaluating performance and token costs across models, we selected Claude 2.1 over GPT-4 for its superior quality-to-cost ratio in early tests. Our A/B tests consistently showed Claude outperforming its peers, making it the clear choice for our first production-ready model.',
        },
      ],
      image: [
        {
          src: img3,
          caption: 'High-level diagram of virtual assistant architecture',
        },
      ],
    },
    {
      subheading: 'Scaling the Solution',
      paragraph: [
        {
          type: 'text',
          content: 'While the MVP didn\'t drastically reduce contact rate, it had an immediate effect on customer satisfaction thanks to faster initial responses. That was our signal to invest further, not just in access, but in resolution. We began scaling the assistant\'s capabilities with three key innovations. First, we introduced RAG to dynamically surface the most relevant help articles from StubHub\'s massive, underutilized content library. Then, we enabled direct action: the assistant could call StubHub\'s internal ops services to update delivery addresses, check case history, and more. Finally, we modularized the assistant into specialized agents for distinct roles — buyer vs. seller, and specific problems like "wrong name on tickets" vs. "never received transfer." These improvements enabled our assistant to go beyond information delivery, resolving user issues end-to-end with a pragmatic fallback system that escalated sensitive cases to human agents when needed.',
        },
      ],
      image: [
        {
          type: "double",
          caption: "StubHub virtual assistant actively resolving a customer inquiry",
        },
        {
          src: img5,
        },
        {
          src: img4,
        },
      ],
    },
    {
      subheading: 'Results and Impact',
      paragraph: [
        {
          type: 'text',
          content: 'Over four months, we shipped more than 20 A/B tests, expanding the assistant from onboarding-only to a full-stack support tool that could reason, retrieve knowledge, and take direct action. The cumulative business impact was substantial: a 16% decrease in contact rate (equating to over $10.4M in annualized cost savings) and a 9% increase in customer satisfaction. While not perfect, as some complex edge cases still warranted human intervention, the assistant represented a huge step forward in StubHub\'s ability to serve customers scalably. Future iterations will focus on refining the handoff between bot and agent, improving action accuracy, and expanding the range of issues the assistant can resolve autonomously.',
        },
      ],
      image: [],
    },
  ]
};

export default stubhub_project;
