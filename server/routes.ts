import { type Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple redirect counter for analytics
  let redirectCountJupita = 0;
  let redirectCountApp = 0;

  // API routes
  app.get('/api/redirects', (req, res) => {
    res.json({
      jupita: redirectCountJupita,
      app: redirectCountApp
    });
  });

  // Track redirects
  app.get('/api/redirect/jupita', (req, res) => {
    redirectCountJupita++;
    res.redirect('https://getjupita.com');
  });

  app.get('/api/redirect/app', (req, res) => {
    redirectCountApp++;
    res.redirect('https://app.getjupita.com');
  });
  
  // Serve the main HTML file
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public/index.html'));
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
