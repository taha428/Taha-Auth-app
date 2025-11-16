# NextAuth App

A Next.js application with OAuth authentication using Google, GitHub, and Facebook providers. This project demonstrates server-side authentication, protected routes, and server-side data fetching.

## Features

- ✅ NextAuth.js v5 authentication
- ✅ OAuth providers: Google, GitHub, Facebook
- ✅ Server-side session validation
- ✅ Protected routes with route groups
- ✅ Server-side API data fetching
- ✅ Dynamic routes with parameters
- ✅ Responsive navbar with auth status
- ✅ Custom loading and error pages
- ✅ Vercel deployment ready

## Project Structure

```
.
├── app/
│   ├── (auth)/              # Authentication route group (hidden from URL)
│   │   └── signin/          # Sign in page
│   ├── (protected)/         # Protected routes (requires auth)
│   │   ├── page.tsx         # Home page
│   │   ├── main/            # Static server page with API data
│   │   └── user/[id]/       # Dynamic server page
│   ├── api/auth/[...nextauth]/ # NextAuth route handler
│   ├── layout.tsx           # Root layout
│   ├── loading.tsx          # Loading UI
│   └── not-found.tsx        # 404 page
├── components/
│   └── navbar.tsx           # Navigation component
├── auth.ts                  # NextAuth configuration
├── package.json
├── tsconfig.json
└── .env.local              # Environment variables (create this)
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure OAuth Providers

Create a `.env.local` file in the project root with the following variables:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Facebook OAuth
FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret

# NextAuth Secret (generate with: openssl rand -base64 32)
AUTH_SECRET=your_auth_secret
```

### 3. Get OAuth Credentials

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the "Google+ API"
4. Create OAuth 2.0 credentials (Web application)
5. Add redirect URIs:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://yourdomain.com/api/auth/callback/google`
6. Copy Client ID and Client Secret to `.env.local`

#### GitHub OAuth
1. Go to [GitHub Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL:
   - Development: `http://localhost:3000/api/auth/callback/github`
   - Production: `https://yourdomain.com/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env.local`

#### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add "Facebook Login" product
4. Go to Settings > Basic and copy App ID and App Secret
5. Add Redirect URIs in Facebook Login settings:
   - Development: `http://localhost:3000/api/auth/callback/facebook`
   - Production: `https://yourdomain.com/api/auth/callback/facebook`

### 4. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and you'll be redirected to the sign-in page.

## Key Features Explained

### Authentication Route Group
Routes under `app/(auth)/` don't appear in the URL:
- `/signin` page is accessible at `/signin`

### Protected Routes
Routes under `app/(protected)/` are protected with server-side validation:
- Home page: `/`
- Main page: `/main` (fetches from public API)
- User page: `/user/[id]` (dynamic route)

### Server-Side Data Fetching
- Static page (`/main`): Fetches data once and caches it
- Dynamic page (`/user/[id]`): Fetches user data based on ID parameter
- All fetching is done on the server (no client-side fetch calls)

### Session Management
The `auth()` function is used throughout to:
- Validate user sessions server-side
- Redirect unauthenticated users to `/signin`
- Display user info in the navbar

## Deployment on Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [Vercel](https://vercel.com/)
2. Click "New Project" and import your GitHub repository
3. Add environment variables:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `FACEBOOK_CLIENT_ID`
   - `FACEBOOK_CLIENT_SECRET`
   - `AUTH_SECRET` (generate with `openssl rand -base64 32`)

### 3. Update OAuth Provider Redirect URIs
Update all OAuth providers with your Vercel domain:
- Replace `http://localhost:3000` with `https://your-app.vercel.app`

### 4. Deploy
Click "Deploy" and wait for the build to complete.

## API Endpoints

- `GET/POST /api/auth/signin/:provider` - Sign in with a provider
- `GET/POST /api/auth/callback/:provider` - OAuth callback
- `GET/POST /api/auth/signout` - Sign out

## Testing

1. Navigate to `http://localhost:3000`
2. You'll be redirected to `/signin`
3. Click a provider button (Google, GitHub, or Facebook)
4. After successful authentication, you'll see the home page
5. Try the "Main Page" and "User 1" links to test protected routes
6. Use the logout button in the navbar to sign out

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes |
| `GITHUB_CLIENT_ID` | GitHub OAuth Client ID | Yes |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth Client Secret | Yes |
| `FACEBOOK_CLIENT_ID` | Facebook OAuth App ID | Yes |
| `FACEBOOK_CLIENT_SECRET` | Facebook OAuth App Secret | Yes |
| `AUTH_SECRET` | NextAuth secret for encryption | Yes |

## Troubleshooting

### "Invalid state" error
- Clear cookies in your browser
- Make sure all environment variables are set correctly

### "Redirect URI mismatch"
- Verify the redirect URIs in each OAuth provider match your current domain

### Session not persisting
- Check that `AUTH_SECRET` is set correctly
- Ensure cookies are enabled in your browser

## Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

## License

MIT
