# MindMeld AI Tutor

Your personalized AI learning assistant on Base, powered by Farcaster.

## Features

- **Instant Topic Explanation**: Get AI-generated explanations in your preferred language
- **Curated Learning Paths**: Structured learning with on-chain progress tracking
- **Knowledge Badges**: Earn ERC-1155 NFT badges for achievements
- **Expert Tutoring**: Connect with verified tutors for personalized sessions

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster MiniKit for social features
- Tailwind CSS with Coinbase theme
- TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example` and add your API keys

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Base Mini App Integration

This app is built as a Base Mini App with:
- OnchainKit for wallet connection and transactions
- Farcaster Frame SDK for social features
- Gas-sponsored transactions via Paymaster
- On-chain knowledge badges (ERC-1155)

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
