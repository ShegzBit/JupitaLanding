import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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

  const httpServer = createServer(app);

  return httpServer;
}
