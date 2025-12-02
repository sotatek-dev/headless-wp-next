# Sunwell Recruitment Website

A modern, multilingual recruitment website built with Next.js 16, featuring solar energy solutions and CAD design services. The application supports three languages (Vietnamese, English, and Japanese) and includes job listings, application forms, and company information.

## Features

- 🌍 **Multi-language Support**: Vietnamese, English, and Japanese
- 🎨 **Modern UI/UX**: Responsive design with Tailwind CSS
- 📝 **Job Listings**: Dynamic job board with filtering capabilities
- 📋 **Application Forms**: User-friendly job application system
- 🏢 **Company Information**: Comprehensive company details and locations
- 🎭 **Mock Service Worker**: API mocking for development
- ⚡ **Performance Optimized**: Built with Next.js 16 App Router
- 🔄 **Real-time Language Switching**: Instant UI translation

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **State Management**: [TanStack Query (React Query)](https://tanstack.com/query)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **API Mocking**: [MSW (Mock Service Worker)](https://mswjs.io/)
- **Animations**: [Animate.css](https://animate.style/)
- **Carousel**: [Swiper](https://swiperjs.com/)
- **Form Handling**: React Hook Form patterns
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v20.x or higher
- **pnpm**: v8.x or higher (recommended) or npm/yarn
- **Git**: Latest version

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd clone-sunwell
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional)

   ```bash
   cp .env.example .env.local
   ```

   Update the `.env.local` file with your configuration:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

## Development

Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The application supports the following locale routes:

- Vietnamese (default): `http://localhost:3000/vi`
- English: `http://localhost:3000/en`
- Japanese: `http://localhost:3000/jp`

## Building for Production

Build the application:

```bash
pnpm build
# or
npm run build
```

Start the production server:

```bash
pnpm start
# or
npm start
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t sunwell-recruitment .
```

### Run Docker Container

```bash
docker run -p 3000:3000 sunwell-recruitment
```

### Using Docker Compose (recommended)

```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
clone-sunwell/
├── public/                 # Static assets
│   ├── images/            # Image files
│   └── mockServiceWorker.js
├── src/
│   ├── app/
│   │   └── [locale]/      # Localized pages
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── jobs/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Application.tsx
│   │   ├── ApplicationModal.tsx
│   │   ├── CompanyInfo.tsx
│   │   ├── Jobs.tsx
│   │   ├── JobCard.tsx
│   │   ├── JobDetails.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── lib/               # Utility functions
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── mocks/             # MSW mock handlers
│   │   ├── handlers.ts
│   │   ├── browser.ts
│   │   └── server.ts
│   ├── types/             # TypeScript types
│   │   └── api.ts
│   ├── i18n.ts            # i18n configuration
│   ├── navigation.ts      # Localized navigation
│   └── middleware.ts      # Next.js middleware
├── messages/              # Translation files
│   ├── en.json           # English translations
│   ├── jp.json           # Japanese translations
│   └── vi.json           # Vietnamese translations
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── Dockerfile            # Docker configuration
├── .dockerignore         # Docker ignore file
└── package.json          # Project dependencies
```

## Internationalization (i18n)

The application uses `next-intl` for internationalization. Translation files are located in the `messages/` directory:

- `messages/vi.json` - Vietnamese (default)
- `messages/en.json` - English
- `messages/jp.json` - Japanese

### Adding New Translations

1. Add the translation key to all three JSON files:

   ```json
   {
     "section": {
       "key": "Translated text"
     }
   }
   ```

2. Use in components:

   ```tsx
   import { useTranslations } from 'next-intl';

   export default function Component() {
     const t = useTranslations('section');
     return <div>{t('key')}</div>;
   }
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `prepare` - Set up Husky git hooks (runs automatically)

## Environment Variables

| Variable              | Description  | Default                 |
| --------------------- | ------------ | ----------------------- |
| `NEXT_PUBLIC_API_URL` | API base URL | `http://localhost:3000` |

## Features in Detail

### Multi-language Support

- Automatic language detection based on URL path
- Language switcher in header
- All content (UI, forms, company info) fully translated

### Job Listings

- Filter jobs by category (Engineering, Marketing, Sales, Design)
- View job details with requirements and benefits
- Apply directly through modal forms

### Application System

- Main application form for general inquiries
- Job-specific application modals
- File upload support for CV/Resume
- Form validation

### Company Information

- Display company details (CEO, establishment date, capital, etc.)
- Interactive maps for headquarters and branch offices
- Business details and employee information

### Mock Service Worker (MSW)

- API mocking for development
- Server-side and client-side request interception
- Configurable mock data in `src/mocks/handlers.ts`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Quality

The project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks
- **lint-staged** for pre-commit formatting

Pre-commit hooks automatically format code before commits.

## License

This project is private and proprietary.
